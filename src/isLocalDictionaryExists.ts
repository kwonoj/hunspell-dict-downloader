import * as fs from 'fs-extra';
import { getDictionaryPath } from './getDictionaryPath';
import { getLanguageRegionCode } from './getLanguageRegionCode';
import { CODE_LANG, CODE_LANG_REGION } from './manifest';
import { log } from './util/logger';

/**
 * Check if given language dictionary is already installed.
 * It behaves lightweight existense check compare to `isInstalledDictionaryValid`,
 * only check if dictionary file exists or not.
 *
 * @param {CODE_LANG_REGION | CODE_LANG} code
 * @return Promise resolves boolean value. True if exists, otherwise false.
 */
export const isLocalDictionaryExists: (
  dictionaryDirectory: string,
  code: CODE_LANG_REGION | CODE_LANG
) => Promise<boolean> = async (dictionaryDirectory: string, code: CODE_LANG_REGION | CODE_LANG): Promise<boolean> => {
  const langRegionCode = getLanguageRegionCode(code);
  const { installDirectory, dic, aff } = getDictionaryPath(dictionaryDirectory, langRegionCode);

  try {
    if (!await fs.pathExists(installDirectory)) {
      return false;
    }

    const dicStat = await fs.stat(dic);
    const affStat = await fs.stat(aff);
    return dicStat.isFile() && affStat.isFile();
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false;
    }

    log.error(`isLocalDictionaryExists: unexpected error occurred while checking ${installDirectory}`, e);
    return false;
  }
};
