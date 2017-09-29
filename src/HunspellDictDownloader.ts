import { CODE_LANG, CODE_LANG_REGION } from './manifest';

export interface HunspellDictDownloader {
  /**
   * Returns array of available dictionary can be installed.
   */
  availableDictionaries: Readonly<Array<CODE_LANG_REGION>>;

  /**
   * Returns array of currently installed dictionary.
   */
  installedDictionaries: Readonly<Array<CODE_LANG_REGION>>;

  /**
   * Download new dictionary and install it.
   * If dictionary package has been downloaded previously and if it's valid
   * it'll be installed without re downloading whole package.
   *
   * NOTE: It is not thread safety and multple attempt to download same
   * language does not gaurantee validaty of installed dictionary.
   *
   * @param {CODE_LANG_REGION | CODE_LANG} language
   * @returns Promise resolves path to installed dictionary.
   */
  installDictionary(code: CODE_LANG_REGION | CODE_LANG): Promise<{ dic: string; aff: string }>;

  /**
   * Delete installed dicationry.
   * @param {CODE_LANG_REGION | CODE_LANG} code
   */
  uninstallDictionary(code: CODE_LANG_REGION | CODE_LANG): Promise<void>;

  /**
   * Clear cache of dictionary previously downloaded.
   * This'll make next attempt to download dictionary should ask remote endpoint.
   */
  clearCache(): Promise<void>;
}
