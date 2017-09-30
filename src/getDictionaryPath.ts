import * as path from 'path';
import { getLanguageRegionCode } from './getLanguageRegionCode';
import { CODE_LANG, CODE_LANG_REGION } from './manifest';

/**
 * @internal
 * Returns path to dictionary files for given langauge.
 * This doesn't check existense of dictionary if it's already installed locally or not.
 *
 * @param {CODE_LANG_REGION | CODE_LANG} code
 */
export const getDictionaryPath: (
  dictionaryDirectory: string,
  code: CODE_LANG_REGION | CODE_LANG
) => Readonly<{ installDirectory: string; dic: string; aff: string }> = (
  dictionaryDirectory: string,
  code: CODE_LANG_REGION | CODE_LANG
) => {
  const langRegionCode = getLanguageRegionCode(code);
  const installDirectory = path.join(dictionaryDirectory, langRegionCode);

  return {
    installDirectory,
    dic: path.join(installDirectory, `${langRegionCode}.dic`),
    aff: path.join(installDirectory, `${langRegionCode}.aff`)
  };
};
