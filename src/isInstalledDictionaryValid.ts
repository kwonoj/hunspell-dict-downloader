import * as md5 from 'md5-file';
import { getDictionaryPath } from './getDictionaryPath';
import { getLanguageRegionCode } from './getLanguageRegionCode';
import { isLocalDictionaryExists } from './isLocalDictionaryExists';
import { CODE_LANG, CODE_LANG_REGION, DictionaryManifest, manifest } from './manifest';
import { log } from './util/logger';

/**
 * @internal
 * Check installation of dictionary as well as validation by comparing MD5 hash of files.
 * If checksum does not match, it'll clear existing dictionary files
 *
 * @param {CODE_LANG_REGION | CODE_LANG} code
 * @return Promise resolves boolean value. True if valid, otherwise false.
 */
export const isInstalledDictionaryValid: (
  dictionaryDirectory: string,
  code: CODE_LANG_REGION | CODE_LANG
) => Promise<boolean> = async (dictionaryDirectory: string, code: CODE_LANG_REGION | CODE_LANG) => {
  const langRegionCode = getLanguageRegionCode(code);
  if (!await isLocalDictionaryExists(dictionaryDirectory, langRegionCode)) {
    log.info(`isInstalledDictionaryValid: '${langRegionCode}' is not installed`);
    return false;
  }

  const { dicMD5, affMD5 } = manifest[langRegionCode] as DictionaryManifest;
  const { dic, aff } = getDictionaryPath(dictionaryDirectory, langRegionCode);

  log.silly(`isInstalledDictionaryValid: checksum`, { dicMD5, affMD5 });
  log.silly(`isInstalledDictionaryValid: checking`, { dic, aff });

  try {
    const dicHash = await md5(dic);
    const affHash = await md5(aff);

    log.silly(`isInstalledDictionaryValid: read`, { dicHash, affHash });

    const isValid = dicHash === dicMD5 && affHash === affMD5;
    log.info(`isInstalledDictionaryValid: dictionary for ${langRegionCode} validated`, isValid);
    return isValid;
  } catch (e) {
    log.error(`isInstalledDictionaryValid: couldn't validate installed dictionary for ${langRegionCode}`, e);
  }
  return false;
};
