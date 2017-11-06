//tslint:disable:no-console no-var-requires no-require-imports
import * as isoCodes from 'cjs-iso-639';
import * as fs from 'fs';
import * as iso3166 from 'iso-3166-2';
import { locale2 } from 'locale2/src/index';
import * as md5File from 'md5-file';
import * as pacote from 'pacote';
import * as path from 'path';
import * as pify from 'pify';
import * as shell from 'shelljs';
import * as v from 'voca';

const readDirPromise = pify(fs.readdir);
const writeFilePromise = pify(fs.writeFile);
const md5Promise = pify(md5File);

const dictionaryPackageDirectory = path.resolve('./dict-tmp/packages');

/**
 * Clone dictionary repo, change to latest known version of package release
 */
const prepareDictionary = () => {
  shell.rm('-rf', './dict-tmp');
  shell.exec(`git clone https://github.com/kwonoj/hunspell-dict ./dict-tmp`);
  shell.cd('./dict-tmp');

  //force line endings to get same MD5 from text dic / aff files
  fs.writeFileSync('./.gitattributes', '* text=input eol=lf');
  shell.exec('git config core.autocrlf false');
  shell.exec('git config core.eol lf');

  //checkout latest tagged release version
  const tag = shell.exec(`git describe --abbrev=0 --tags`).stdout;
  shell.exec(`git checkout ${tag}`);

  //clear current one to get specified line endings
  shell.exec(`git rm -rf --cached .`);
  shell.exec(`git reset --hard HEAD`);

  shell.cd('..');
  shell.rm('-f', './src/manifest.ts');
};

const cleanup = () => {
  shell.rm('-rf', './dict-tmp');
  shell.exec('npx prettier --write --single-quote --print-width 120 --jsx-bracket-same-line true ./src/manifest.ts');
};

/**
 * Get package manifest / actual dictionary md 5 hash for validate dictionaries
 *
 */
const getManifest = async (dictionaryLanguage: string, packageVersion: string) => {
  const dictionaryPackageName = `hunspell-dict-${dictionaryLanguage}@${packageVersion}`;
  const packageManifest = await pacote.manifest(dictionaryPackageName);

  const dictionaryPath = path.join(dictionaryPackageDirectory, dictionaryLanguage);
  const dicMD5 = await md5Promise(path.join(dictionaryPath, `${dictionaryLanguage}.dic`));
  const affMD5 = await md5Promise(path.join(dictionaryPath, `${dictionaryLanguage}.aff`));
  const { defaultRegion } = require(path.join(dictionaryPath, 'package.json'));

  const ret = {
    code: dictionaryLanguage,
    packageName: packageManifest.name,
    version: packageManifest.version,
    integrity: packageManifest._integrity,
    shasum: packageManifest._shasum,
    dicMD5,
    affMD5,
    defaultRegion
  };

  if (dictionaryLanguage === `sr-latn`) {
    return {
      ...ret,
      langCode: dictionaryLanguage,
      language: 'Serbian (Lation)'
    };
  }

  const [langCode, regionCode] = locale2(dictionaryLanguage).split('-');
  const language = isoCodes['1'][langCode][0];

  return {
    ...ret,
    langCode,
    language,
    region: regionCode ? iso3166.country(regionCode)['name'] : null
  };
};

/**
 * Naive code generator for manifest data by templatting manifest object into plain string for actual typescript code.
 *
 */
const emitManifest = async (manifest: Array<object>) => {
  //get language code xx-xx, convert to enum key XX_XX
  const getLangRegionEnumKey = (s: string) =>
    v
      .chain(s)
      .snakeCase()
      .upperCase()
      .value();

  const dictionaryLangRegionCodeKeys = manifest.map((x: { code: string }) => ({
    key: getLangRegionEnumKey(x.code),
    value: x.code
  }));

  //generate typed enum for available languages
  const enum_lang_region_Template = `
/**
 * Enum for dictionary languages with region code.
 */
enum CODE_LANG_REGION { \n ${dictionaryLangRegionCodeKeys.map(x => `${x.key} = \'${x.value}\'\n`).join(',')} \n}`;

  const dictionaryLangCodeKeys = manifest
    .filter((x: { defaultRegion: boolean }) => x.defaultRegion)
    .map((x: { langCode: string }) => ({
      key: getLangRegionEnumKey(x.langCode),
      value: x.langCode
    }));

  const enum_lang_Template = `
/**
 * Enum for dictionary languages without code.
 */
enum CODE_LANG { \n ${dictionaryLangCodeKeys.map(x => `${x.key} = \'${x.value}\'\n`).join(',')} \n}`;

  //generate interface for dictionary manifest
  const interfaceTemplate = `/**
* interfaces for manifest of each dictionary.
*/
interface DictionaryManifest {
/**
   * Code of dictionary, formed as xx-yy. xx represents language code, yy represents region.
   * Some languages doesn't have region code will have xx part only.
   */
code: CODE_LANG_REGION;
/**
   * Code of dictionary without region.
   */
langCode: CODE_LANG;
/**
   * Language of dictionary.
   */
language: string;
/**
   * Region of dictionary, if available.
   */
region?: string;
/**
   * name of npm packge for dictionary.
   */
packageName: string;
/**
   * version of npm package for dictionary.
   */
version: string;
/**
   * integrity of package.
   */
integrity: string;
/**
   * sha of package.
   */
shasum: string;
/**
   * md5 hash of actual dic file.
   */
dicMD5: string;
/**
   * md5 hash of actual aff file.
   */
affMD5: string;
}`;

  const getManifestValue = (key: string, value: any) => {
    if (key === 'code') {
      return `CODE_LANG_REGION.${getLangRegionEnumKey(value)}`;
    } else if (key === 'langCode') {
      return `CODE_LANG.${getLangRegionEnumKey(value)}`;
    }
    return `\'${value}\'`;
  };

  //generate manifest object satisfies DictionaryManifest type
  const getManifestTemplate = (manifest: any) => `{
    ${Object.keys(manifest)
      .filter(key => key !== 'defaultRegion')
      .map(key => `${key}: ${getManifestValue(key, manifest[key])}\n`)
      .join(',')}
  }`;

  //generate stringmap of manifest object for each manifest
  const manifestMapTemplate = `const manifest: {[index in CODE_LANG_REGION]: Readonly<DictionaryManifest>} = {
    ${manifest.map((x: any) => `\'${x.code}\': ${getManifestTemplate(x)}\n`).join(',')}
  };`;

  const langMapperTemplate = `
/**
 * Maps language only code to lang_region code for dictionary lookup.
 * For multiple region dictionaries, it falls back to default region. (i.e EN -> EN_US)
 */
const languageCodeMapper: {[index in CODE_LANG]: CODE_LANG_REGION} = {
    ${manifest
      .filter((x: { defaultRegion: boolean }) => x.defaultRegion)
      .map(
        (x: { langCode: string; code: string }) =>
          `\'${x.langCode}\': CODE_LANG_REGION.${getLangRegionEnumKey(x.code)}\n`
      )
      .join(',')}
  }`;

  //concat and export generated
  const output = `//this file is auto generated, do not modify manually
    ${enum_lang_region_Template}\n${enum_lang_Template}\n${langMapperTemplate}\n${interfaceTemplate}\n${manifestMapTemplate}\n
    export {CODE_LANG_REGION, CODE_LANG, languageCodeMapper, DictionaryManifest, manifest};
    `;

  await writeFilePromise('./src/manifest.ts', output);
};

const main = async () => {
  console.log(`Pull out dictionary package to get latest metadata`);
  prepareDictionary();

  const dictionaries = await readDirPromise(dictionaryPackageDirectory);
  const manifest = await Promise.all(
    dictionaries.map((x: string) => {
      const packageVersion = require(path.resolve(`./dict-tmp/packages/${x}/package.json`)).version;
      console.log(`Generating manifest for dictionary '${x}' for version '${packageVersion}'`);
      return getManifest(x, packageVersion);
    })
  );

  await emitManifest(manifest);

  cleanup();
};

main();
