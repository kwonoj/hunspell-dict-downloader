import { CODE_LANG, CODE_LANG_REGION, languageCodeMapper } from './manifest';

/**
 * Find lang_region code mapped from lang code only
 * @param code
 */
export const getLanguageRegionCode: (code: CODE_LANG_REGION | CODE_LANG) => CODE_LANG_REGION = (
  code: CODE_LANG_REGION | CODE_LANG
) => languageCodeMapper[code] || code;
