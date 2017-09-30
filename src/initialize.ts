import * as fs from 'fs-extra';
import * as includes from 'lodash.includes';
import { isInstalledDictionaryValid } from './isInstalledDictionaryValid';
import { CODE_LANG_REGION } from './manifest';

/**
 * @internal
 * Initializes dictionary downloader instance.
 * If given directory does not exists, it'll create new one.
 * Otherwise it'll look for existing dictionaries.
 * @param {string} dictionaryDirectory path to download dictionaries.
 * @param {Array<CODE_LANG_REGION>} availableDictionaries list of available dictionary in manifest.
 *
 * @returns Array of dictionary currently installed.
 */
export const initialize = async (
  dictionaryDirectory: string,
  availableDictionaries: Readonly<Array<CODE_LANG_REGION>>
) => {
  await fs.ensureDir(dictionaryDirectory);

  const directory = await fs.readdir(dictionaryDirectory);
  const existingDictionaries = directory.filter((dict: CODE_LANG_REGION) =>
    includes(availableDictionaries, dict)
  ) as Array<CODE_LANG_REGION>;

  const ret = [];
  for (const dict of existingDictionaries) {
    if (await isInstalledDictionaryValid(dictionaryDirectory, dict)) {
      ret.push(dict);
    }
  }
  return ret;
};
