//tslint:disable:no-console no-var-requires no-require-imports
import * as fs from 'fs';
import * as md5File from 'md5-file';
import * as pacote from 'pacote';
import * as path from 'path';
import * as shell from 'shelljs';
import { promisify } from 'util';
import * as v from 'voca';

const readDirPromise = promisify(fs.readdir);
const writeFilePromise = promisify(fs.writeFile);
const md5Promise = promisify(md5File);

const dictionaryPackageDirectory = path.resolve('./dict-tmp/packages');

/**
 * Clone dictionary repo, change to latest known version of package release
 */
const prepareDictionary = () => {
  shell.rm('-rf', './dict-tmp');
  shell.exec(`git clone https://github.com/kwonoj/hunspell-dict ./dict-tmp`);
  shell.cd('./dict-tmp');
  const tag = shell.exec(`git describe --abbrev=0 --tags`).stdout;
  shell.exec(`git checkout ${tag}`);
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

  const ret = {
    language: dictionaryLanguage,
    packageName: packageManifest.name,
    version: packageManifest.version,
    integrity: packageManifest._integrity,
    shasum: packageManifest._shasum,
    dicMD5,
    affMD5
  };
  return ret;
};

/**
 * Naive code generator for manifest data by templatting manifest object into plain string for actual typescript code.
 *
 */
const emitManifest = async (manifest: Array<object>) => {
  //get language code xx-xx, convert to enum key XX_XX
  const getEnumKey = (s: string) =>
    v
      .chain(s)
      .snakeCase()
      .upperCase()
      .value();

  const dictionaryKeys = manifest.map((x: { language: string }) => ({
    key: getEnumKey(x.language),
    value: x.language
  }));

  //generate typed enum for available languages
  const enumTemplate = `enum DICT_LANGUAGE { \n ${dictionaryKeys
    .map(x => `${x.key} = \'${x.value}\'\n`)
    .join(',')} \n}`;
  //generate interface for dictionary manifest
  const interfaceTemplate = `/**
* interfaces for manifest of each dictionary.
*/
interface DictionaryManifest {
/**
   * Language of dictionary, formed as xx-yy. xx represents language code, yy represents region.
   * Some languages doesn't have region code will have xx part only.
   */
language: DICT_LANGUAGE;
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

  //generate manifest object satisfies DictionaryManifest type
  const getManifestTemplate = (manifest: any) => `{
    ${Object.keys(manifest)
      .map(
        key => `${key}: ${key === 'language' ? `DICT_LANGUAGE.${getEnumKey(manifest[key])}` : `\'${manifest[key]}\'`}\n`
      )
      .join(',')}
  }`;

  //generate stringmap of manifest object for each manifest
  const manifestMapTemplate = `const manifest: {[index in DICT_LANGUAGE]: Readonly<DictionaryManifest>} = {
    ${manifest.map((x: any) => `\'${x.language}\': ${getManifestTemplate(x)}\n`).join(',')}
  };`;

  //concat and export generated
  const output = `//this file is auto generated, do not modify manually
    ${enumTemplate}\n${interfaceTemplate}\n${manifestMapTemplate}\nexport {DICT_LANGUAGE, DictionaryManifest, manifest};
    `;

  await writeFilePromise('./src/manifest.ts', output);
};

const main = async () => {
  console.log(`Pull out dictionary package to get latest metadata`);
  prepareDictionary();

  const packageVersion = require(path.resolve('./dict-tmp/lerna.json')).version;
  console.log(`Generating manifest for dictionary version '${packageVersion}'`);

  const dictionaries = await readDirPromise(dictionaryPackageDirectory);
  const manifest = await Promise.all(dictionaries.map(x => getManifest(x, packageVersion)));

  await emitManifest(manifest);

  cleanup();
};

main();
