import * as fs from 'fs-extra';
import { isInstalledDictionaryValid } from './isInstalledDictionaryValid';
import { CODE_LANG_REGION } from './manifest';

/**
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
  const existingDictionaries = directory.filter(availableDictionaries.includes) as Array<CODE_LANG_REGION>;

  return await Promise.all(existingDictionaries.filter(dict => isInstalledDictionaryValid(dictionaryDirectory, dict)));
};
