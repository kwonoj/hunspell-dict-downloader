import * as path from 'path';
import { CODE_LANG_REGION } from './manifest';

/**
 * @internal
 * Returns path to dictionary files for given langauge.
 * This doesn't check existense of dictionary if it's already installed locally or not.
 *
 * @param {CODE_LANG_REGION} code
 */
export const getDictionaryPath: (
  dictionaryDirectory: string,
  code: CODE_LANG_REGION
) => Readonly<{ installDirectory: string; dic: string; aff: string }> = (
  dictionaryDirectory: string,
  code: CODE_LANG_REGION
) => ({
  installDirectory: path.join(dictionaryDirectory, code),
  dic: path.join(dictionaryDirectory, code, `${code}.dic`),
  aff: path.join(dictionaryDirectory, code, `${code}.aff`)
});
