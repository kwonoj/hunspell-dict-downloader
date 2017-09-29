//this file is auto generated, do not modify manually

/**
 * Enum for dictionary languages with region code.
 */
enum CODE_LANG_REGION {
  BG_BG = 'bg-bg',
  CA_ES = 'ca-es',
  CS_CZ = 'cs-cz',
  DA_DK = 'da-dk',
  DE_AT = 'de-at',
  DE_CH = 'de-ch',
  DE_DE = 'de-de',
  EL_GR = 'el-gr',
  EN_AU = 'en-au',
  EN_CA = 'en-ca',
  EN_GB = 'en-gb',
  EN_US = 'en-us',
  ES_ES = 'es-es',
  ET_EE = 'et-ee',
  FA_IR = 'fa-ir',
  FO_FO = 'fo-fo',
  FR_FR = 'fr-fr',
  HE_IL = 'he-il',
  HR_HR = 'hr-hr',
  HU_HU = 'hu-hu',
  IT_IT = 'it-it',
  KO = 'ko',
  LT_LT = 'lt-lt',
  LV_LV = 'lv-lv',
  NB_NO = 'nb-no',
  NL_NL = 'nl-nl',
  PL_PL = 'pl-pl',
  PT_BR = 'pt-br',
  PT_PT = 'pt-pt',
  RO_RO = 'ro-ro',
  RU_RU = 'ru-ru',
  SK_SK = 'sk-sk',
  SL_SI = 'sl-si',
  SR = 'sr',
  SR_LATN = 'sr-latn',
  SV_SE = 'sv-se',
  TA_IN = 'ta-in',
  TG_TG = 'tg-tg',
  TR = 'tr',
  UK_UA = 'uk-ua',
  VI = 'vi'
}

/**
 * Enum for dictionary languages without code.
 */
enum CODE_LANG {
  BG = 'bg',
  CA = 'ca',
  CS = 'cs',
  DA = 'da',
  DE = 'de',
  EL = 'el',
  EN = 'en',
  ES = 'es',
  ET = 'et',
  FA = 'fa',
  FO = 'fo',
  FR = 'fr',
  HE = 'he',
  HR = 'hr',
  HU = 'hu',
  IT = 'it',
  KO = 'ko',
  LT = 'lt',
  LV = 'lv',
  NB = 'nb',
  NL = 'nl',
  PL = 'pl',
  PT = 'pt',
  RO = 'ro',
  RU = 'ru',
  SK = 'sk',
  SL = 'sl',
  SR = 'sr',
  SR_LATN = 'sr-latn',
  SV = 'sv',
  TA = 'ta',
  TG = 'tg',
  TR = 'tr',
  UK = 'uk',
  VI = 'vi'
}

/**
 * Maps language only code to lang_region code for dictionary lookup.
 * For multiple region dictionaries, it falls back to default region. (i.e EN -> EN_US)
 */
const languageCodeMapper: { [index in CODE_LANG]: CODE_LANG_REGION } = {
  bg: CODE_LANG_REGION.BG_BG,
  ca: CODE_LANG_REGION.CA_ES,
  cs: CODE_LANG_REGION.CS_CZ,
  da: CODE_LANG_REGION.DA_DK,
  de: CODE_LANG_REGION.DE_DE,
  el: CODE_LANG_REGION.EL_GR,
  en: CODE_LANG_REGION.EN_US,
  es: CODE_LANG_REGION.ES_ES,
  et: CODE_LANG_REGION.ET_EE,
  fa: CODE_LANG_REGION.FA_IR,
  fo: CODE_LANG_REGION.FO_FO,
  fr: CODE_LANG_REGION.FR_FR,
  he: CODE_LANG_REGION.HE_IL,
  hr: CODE_LANG_REGION.HR_HR,
  hu: CODE_LANG_REGION.HU_HU,
  it: CODE_LANG_REGION.IT_IT,
  ko: CODE_LANG_REGION.KO,
  lt: CODE_LANG_REGION.LT_LT,
  lv: CODE_LANG_REGION.LV_LV,
  nb: CODE_LANG_REGION.NB_NO,
  nl: CODE_LANG_REGION.NL_NL,
  pl: CODE_LANG_REGION.PL_PL,
  pt: CODE_LANG_REGION.PT_PT,
  ro: CODE_LANG_REGION.RO_RO,
  ru: CODE_LANG_REGION.RU_RU,
  sk: CODE_LANG_REGION.SK_SK,
  sl: CODE_LANG_REGION.SL_SI,
  sr: CODE_LANG_REGION.SR,
  'sr-latn': CODE_LANG_REGION.SR_LATN,
  sv: CODE_LANG_REGION.SV_SE,
  ta: CODE_LANG_REGION.TA_IN,
  tg: CODE_LANG_REGION.TG_TG,
  tr: CODE_LANG_REGION.TR,
  uk: CODE_LANG_REGION.UK_UA,
  vi: CODE_LANG_REGION.VI
};
/**
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
}
const manifest: { [index in CODE_LANG_REGION]: Readonly<DictionaryManifest> } = {
  'bg-bg': {
    code: CODE_LANG_REGION.BG_BG,
    packageName: 'hunspell-dict-bg-bg',
    version: '0.0.2',
    integrity: 'sha512-PkBq/SSiR2oZ0xSh55BvbINDJSUF/sDjZ1LyOVPCYALF+MlM/aw/0bjzYJoTA79AvOP2H+pkQSRG22Up9WJ85g==',
    shasum: '0c99925f6ca70b93d4a219f588657e6655adf1d5',
    dicMD5: '9672b1b11231484e7af10c510b023262',
    affMD5: 'ac6604b3e4cfa3863204555da482ec7e',
    langCode: CODE_LANG.BG,
    language: 'Bulgarian',
    region: 'Bulgaria'
  },
  'ca-es': {
    code: CODE_LANG_REGION.CA_ES,
    packageName: 'hunspell-dict-ca-es',
    version: '0.0.2',
    integrity: 'sha512-n98BbBgSu8Ft70T7z+P+OliNp/sNmIQk8pAWOhI9OpNHyTTYp3Otwo7yp3Gt8guktTcwYUqMI/cgMX5N5R9o5w==',
    shasum: 'a17037b30892d1e5d146bb506fc76b394afa3187',
    dicMD5: '9a75d2db18726a5afc0c506493abe2b2',
    affMD5: '63bd530fc94667ef48a01dcf6015499e',
    langCode: CODE_LANG.CA,
    language: 'Catalan',
    region: 'Spain'
  },
  'cs-cz': {
    code: CODE_LANG_REGION.CS_CZ,
    packageName: 'hunspell-dict-cs-cz',
    version: '0.0.2',
    integrity: 'sha512-p/bndsRqbpxOfb8M2a6xnvWE9PatrRguM+bxBtGaABUq9bvbXmT0RMwMIc7VdsCzGweKRczjliD3t5DqlhBWnA==',
    shasum: '09a3b4083edbbf9dde85e719b1758466b2df6b55',
    dicMD5: '2c4b69862736c7fbdd99177e9e6d5646',
    affMD5: '11187d5df5cfa67a0717af206c19031f',
    langCode: CODE_LANG.CS,
    language: 'Czech',
    region: 'Czech Republic'
  },
  'da-dk': {
    code: CODE_LANG_REGION.DA_DK,
    packageName: 'hunspell-dict-da-dk',
    version: '0.0.2',
    integrity: 'sha512-SuQAq4UOWls3S5O/3pDlg5V1GS3ulSATfPWRBhL7i05f30TZvMUkr44hwRWqlaY5mmmSyc25ZiJsd7x5aX0PCw==',
    shasum: '4bfd22f2abf94537604007a79d116f90d40b63f9',
    dicMD5: '455a498af8ff9618041952d5d5f21775',
    affMD5: 'af05622c4e14dfc0f12095077b812484',
    langCode: CODE_LANG.DA,
    language: 'Danish',
    region: 'Denmark'
  },
  'de-at': {
    code: CODE_LANG_REGION.DE_AT,
    packageName: 'hunspell-dict-de-at',
    version: '0.0.2',
    integrity: 'sha512-lbkeCdVWas22G1k/sQvLc1/WzHbDEh7WmZEzH58IJvi/5XvjmXmG7eHItlCcNies5I0nij54Wl+jww78m1ZqDQ==',
    shasum: '6c95398b4027a4b6b6075f7537cb868958c2fc43',
    dicMD5: '34dc8ab8ccecc3cadb5c288cdb92caf0',
    affMD5: '923abbd9e6fea52c5f472259737566bd',
    langCode: CODE_LANG.DE,
    language: 'German',
    region: 'Austria'
  },
  'de-ch': {
    code: CODE_LANG_REGION.DE_CH,
    packageName: 'hunspell-dict-de-ch',
    version: '0.0.2',
    integrity: 'sha512-m9seIM6FWH84KQ7EkXBTgbhVC3v3m++xd+1nsDobv3xEhR+ESfA9u6oCG+G1fXW9jSTNe7C/A5zzF7FTIGCMjg==',
    shasum: '5820455582c6d491717245a9b7c629be11db1cdd',
    dicMD5: 'e721436afa0d804a3113be11a610f015',
    affMD5: 'b34b57d067d8a0653c98be8d220f0f27',
    langCode: CODE_LANG.DE,
    language: 'German',
    region: 'Switzerland'
  },
  'de-de': {
    code: CODE_LANG_REGION.DE_DE,
    packageName: 'hunspell-dict-de-de',
    version: '0.0.2',
    integrity: 'sha512-RBeYG5dfePP37fIhyHdDL9n7HEAHkQlY6wp4m5XDKzr3A6GvpGtMiC0Trp0tCVwJ2sJpp69SkIEsv6Wj+o2i/A==',
    shasum: '9ff661508c7df1562a6571a1686db56d13a55683',
    dicMD5: '2f7d324c56cd32ee176c4ec5351e0701',
    affMD5: '4fd619072d6e371d648f6bd618470412',
    langCode: CODE_LANG.DE,
    language: 'German',
    region: 'Germany'
  },
  'el-gr': {
    code: CODE_LANG_REGION.EL_GR,
    packageName: 'hunspell-dict-el-gr',
    version: '0.0.2',
    integrity: 'sha512-1QG7WfwNlKdgbmYCLBCXScQTSgpp/QR+1vzMgClyEZTZkrAJ/0HKuKiCVfCLs8BxAAT3Wmf1MqEBrYr9Kzd1xg==',
    shasum: '307f82e2cf1998158e16be69fcc79d1aaf1de62e',
    dicMD5: '246378b802cd92e86c7373c248509bd5',
    affMD5: '30b40b42ba11611f012e6fdcdb614129',
    langCode: CODE_LANG.EL,
    language: 'Greek',
    region: 'Greece'
  },
  'en-au': {
    code: CODE_LANG_REGION.EN_AU,
    packageName: 'hunspell-dict-en-au',
    version: '0.0.2',
    integrity: 'sha512-xFMzT9yhJ+zlpeTdaRc+hPGIuppBeWN+RHYHVvQXdYsIoi6qRqdRcRFcQkzTQbr/PD3A7Nm4ZG9y5g8h13ARJg==',
    shasum: '0727762bc9dbf2938cc1986f0390ff72d998123d',
    dicMD5: 'fb9a23797b482d621ee71bf18fe804c6',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'Australia'
  },
  'en-ca': {
    code: CODE_LANG_REGION.EN_CA,
    packageName: 'hunspell-dict-en-ca',
    version: '0.0.2',
    integrity: 'sha512-nOAAuVa9rIUNeAW4nb/dbtm72163CUtr4wT/wM268BeqPnE6YzcvY23uBBunnyrQ4e8mIHvFeqAnOEexgphlfA==',
    shasum: '22ef0e3b691a2a94f597085588d9d28f6ee6e886',
    dicMD5: 'c98d157ef0b1030e6133fd63350f8397',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'Canada'
  },
  'en-gb': {
    code: CODE_LANG_REGION.EN_GB,
    packageName: 'hunspell-dict-en-gb',
    version: '0.0.2',
    integrity: 'sha512-8+SKLk9FeybhazKY6TBnedIeqhg5u2kH8ssTZ7J5dv0LQMeFg0CYHKujI9nRdwbpPr1yH7GmNysfxopHCfA0aw==',
    shasum: '52da1d530e5acc29370e3c46ee8a87f42f9968df',
    dicMD5: '9c081b06d0db79d238e0d305780afa3d',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'United Kingdom'
  },
  'en-us': {
    code: CODE_LANG_REGION.EN_US,
    packageName: 'hunspell-dict-en-us',
    version: '0.0.2',
    integrity: 'sha512-rgecatdq9PKvcByXL4SjvGVd+ex4eHbU14nVuaF0zqgSteJpMHRp1DToyrHqYcn2a2lj4M2seE1y+4cWBiH9fQ==',
    shasum: '70a4339277c3aad32e3953f1ef54cbfb29be7697',
    dicMD5: 'ecba047c3b6d6b941aa78153959097c0',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'United States'
  },
  'es-es': {
    code: CODE_LANG_REGION.ES_ES,
    packageName: 'hunspell-dict-es-es',
    version: '0.0.2',
    integrity: 'sha512-YjOtwZP8Jk1ym2FYr3WCebVySKnAijLJ/3ah697QaToVvP0o1Wb3NRk2q/yjCTgQov7ffivb6Uz0VEx2B/7eUw==',
    shasum: '1355b2d89dfb2e86787293b50d0877a37361e288',
    dicMD5: 'ac93227635f20d53e9e8233d44102a62',
    affMD5: 'abcdc0ce99c387610506f38e3585a56f',
    langCode: CODE_LANG.ES,
    language: 'Spanish',
    region: 'Spain'
  },
  'et-ee': {
    code: CODE_LANG_REGION.ET_EE,
    packageName: 'hunspell-dict-et-ee',
    version: '0.0.2',
    integrity: 'sha512-g3S4vTYFNns7v7nvOl4lD39CI7O3xvt0kwor8ZZTjKJvv5EBb1hJmxQxsPtfFb3WrMC1aAyCCvob0ais07uPFw==',
    shasum: 'cfc10b2ce516ba06d13b0ca6a34862f9378b1f7b',
    dicMD5: '7b95b5586b031d7643d0dbc56c6e7838',
    affMD5: 'fee077bcac75b375aa6bb5b7839f0839',
    langCode: CODE_LANG.ET,
    language: 'Estonian',
    region: 'Estonia'
  },
  'fa-ir': {
    code: CODE_LANG_REGION.FA_IR,
    packageName: 'hunspell-dict-fa-ir',
    version: '0.0.2',
    integrity: 'sha512-b1lWq+UKrfroHi8Bo3V/NE0MeGNgTzcp/l2hTwTGFJhnaXrTDUsFg5TsM+KLz9G8Ff5F7vl8MyrpxaetSPRkhg==',
    shasum: '7e592dc588a3d5ecd376bc90f8fb8563924c489f',
    dicMD5: '1138a448bad5f7677b1fe461ed00480a',
    affMD5: '8de22a87459fd852c505c40fc043ed9e',
    langCode: CODE_LANG.FA,
    language: 'Persian',
    region: 'Iran'
  },
  'fo-fo': {
    code: CODE_LANG_REGION.FO_FO,
    packageName: 'hunspell-dict-fo-fo',
    version: '0.0.2',
    integrity: 'sha512-xhxfieb+2RcV2U5Nro2wN4ndNT6QRZtXcrhRvoxx3Ur4fuouYb5fNDh+eOA2VJ3fVS6Y5E8TIjkMtMj2+PNsSQ==',
    shasum: '7680bf3d83c2fcf255bae31d5eb77566efee556b',
    dicMD5: '55c94ed87172a356ea25fba1f1029f94',
    affMD5: 'be65ebf1da937d8a8031d448ee087f87',
    langCode: CODE_LANG.FO,
    language: 'Faroese',
    region: 'Faroe Islands'
  },
  'fr-fr': {
    code: CODE_LANG_REGION.FR_FR,
    packageName: 'hunspell-dict-fr-fr',
    version: '0.0.2',
    integrity: 'sha512-WGSHu2VEU7vtEfjm3lt35M6US/sCD72ay54APkT/W0iIjLYf2B4Ln5q2NxHtQv+yl4W6WM5Z9/fW0Aza9yCnyA==',
    shasum: '13285f6d8022d990d7f0701a953d9fad478ec221',
    dicMD5: '32f33ac4e3a44d41f6c284c3d327d3ef',
    affMD5: 'fdf0fda98f3f911c7ad7b8a269fff10b',
    langCode: CODE_LANG.FR,
    language: 'French',
    region: 'France'
  },
  'he-il': {
    code: CODE_LANG_REGION.HE_IL,
    packageName: 'hunspell-dict-he-il',
    version: '0.0.2',
    integrity: 'sha512-GsGtAukkv3d2TiIaWPB0gXlIBfTuxONeyItU45/RQOYZImF+u+7szoYiqB9CIJOrsGg+4Xx60MDmunZWFza4XA==',
    shasum: 'af0caa4afadd042f2d3828670d61c4aca9b0b0ab',
    dicMD5: '12fa0053722614a21bcce67d5eead799',
    affMD5: 'bec58ce5c6c0b0c39a44a1fc9c4ab522',
    langCode: CODE_LANG.HE,
    language: 'Hebrew',
    region: 'Israel'
  },
  'hr-hr': {
    code: CODE_LANG_REGION.HR_HR,
    packageName: 'hunspell-dict-hr-hr',
    version: '0.0.2',
    integrity: 'sha512-FYvYTybgACwfgcIkgu9nve//eseQ+upAimMvq8mvSIRRooN+pEJQ27/0ZpeHFvkM3wWom0ixLuurLpHvXoRTrA==',
    shasum: 'c53089c1127fa965c4ecb6bff41c0de5f9540606',
    dicMD5: 'c31fc81ad491d3e531de1214f835a0fd',
    affMD5: 'ba571af2cd9fb9254fde55711efbefe3',
    langCode: CODE_LANG.HR,
    language: 'Croatian',
    region: 'Croatia'
  },
  'hu-hu': {
    code: CODE_LANG_REGION.HU_HU,
    packageName: 'hunspell-dict-hu-hu',
    version: '0.0.2',
    integrity: 'sha512-q07oetX441vCCex1/8MXPfaD75H6EmB0j9r7kfBnMcOSLBVBkq9VyfSjY7zUPmXOGAECB0KUVp0Zvkt9Di/9Nw==',
    shasum: '06d360767e2d7b0f23c9163fed6a3b6f627ce740',
    dicMD5: 'fb6f93a3a8e1b1f561e28e1390d9a98c',
    affMD5: 'a260b37a40f5667784a1ca2c44f650b7',
    langCode: CODE_LANG.HU,
    language: 'Hungarian',
    region: 'Hungary'
  },
  'it-it': {
    code: CODE_LANG_REGION.IT_IT,
    packageName: 'hunspell-dict-it-it',
    version: '0.0.2',
    integrity: 'sha512-JmgG+Z9XOQrCIWWcT7PjHF4qIw5Qozv1vKdTIxV1jCMiZxFzqVWDjMGoxMOuqVytc+KGN2ZcSGHLLEfkJ9gvGA==',
    shasum: '0a65889eb81dd4c745b6be8208efdbd7fcf216a7',
    dicMD5: 'fddb8fff08a4c9f9ea531f1d4720252f',
    affMD5: 'f2d9df5c84af5d94df471ab144046add',
    langCode: CODE_LANG.IT,
    language: 'Italian',
    region: 'Italy'
  },
  ko: {
    code: CODE_LANG_REGION.KO,
    packageName: 'hunspell-dict-ko',
    version: '0.0.2',
    integrity: 'sha512-CLNxfUrsLeh7DIyExJCsX6mFvD/KuTj79EBik3veQGKCkJ9IADMiLu5eV/XgDMqS0S0M4uH1+8qHePI35ozqkQ==',
    shasum: '8a2ed09895f8a178c92a8396c234f9580681999d',
    dicMD5: '1f68e4b476ca574014875474562d4b65',
    affMD5: '12080e5799de3b96738c5df0b48c72be',
    langCode: CODE_LANG.KO,
    language: 'Korean',
    region: 'null'
  },
  'lt-lt': {
    code: CODE_LANG_REGION.LT_LT,
    packageName: 'hunspell-dict-lt-lt',
    version: '0.0.2',
    integrity: 'sha512-DuNJ5UOk7QSO9YB73WqJk00qAfrOL5ohvsbdT1C+VodXbpMqiYlb0/lTZjKXIA+bfYN6AVln2LbNDrsMhj1R4Q==',
    shasum: '0900f335c3aeb247bc8a359692b4211c3856ab90',
    dicMD5: 'dd2389c8c67a4477921a1341564d9e9b',
    affMD5: '583826dd8b85b0a71158c10634c532ae',
    langCode: CODE_LANG.LT,
    language: 'Lithuanian',
    region: 'Lithuania'
  },
  'lv-lv': {
    code: CODE_LANG_REGION.LV_LV,
    packageName: 'hunspell-dict-lv-lv',
    version: '0.0.2',
    integrity: 'sha512-VYXBHg5UXV/qZtyCEp2FoGWRoPHQ7v9nYT3ZBXQ7ZuwOT/sbgN6pBwOhfWTDA8foH49UmESmZ/zRcROmZGD6Rg==',
    shasum: '200c98166c81547cfc880652c89f2463863a1182',
    dicMD5: '4ac7de72dcc8ce69d6a3eebce8fc9e6e',
    affMD5: '3166a42b5663042726a00a0e54cb5a27',
    langCode: CODE_LANG.LV,
    language: 'Latvian',
    region: 'Latvia'
  },
  'nb-no': {
    code: CODE_LANG_REGION.NB_NO,
    packageName: 'hunspell-dict-nb-no',
    version: '0.0.2',
    integrity: 'sha512-E8XE16pcwUTwzQ+yfI8t73X4NSgK34TZLcAV5a3v3KnlHiGLFzNe6p7GHS9VxSSsX+/dXN0UyCXa3YUjDqn63w==',
    shasum: '365b6c54dd72bd98a8326a30ad446e4a78861349',
    dicMD5: 'fba178582f47956d820a0a66bb1c799a',
    affMD5: '99df3013d7e46e70068c5607665395d3',
    langCode: CODE_LANG.NB,
    language: 'Norwegian Bokmål',
    region: 'Norway'
  },
  'nl-nl': {
    code: CODE_LANG_REGION.NL_NL,
    packageName: 'hunspell-dict-nl-nl',
    version: '0.0.2',
    integrity: 'sha512-JAqIEt3xJVKXnfcVr6PX6hKMefrRUdmPjU0Wc02+ENngreY2q1KV10dx+F4qEORyt43sJDwkpSrLtQZiptUP0w==',
    shasum: 'edc60162638666215762767fb0dd1758ed0df66e',
    dicMD5: '73a1de7e1f83ce6c8280a9152851d8eb',
    affMD5: '028ad724f26b6ac14333d88e6242ca1a',
    langCode: CODE_LANG.NL,
    language: 'Dutch',
    region: 'Netherlands'
  },
  'pl-pl': {
    code: CODE_LANG_REGION.PL_PL,
    packageName: 'hunspell-dict-pl-pl',
    version: '0.0.2',
    integrity: 'sha512-mA4UwNaLywQrvS0Wm6QWwQ5es1+oLs6CXgyDWa8rXYX3oMqBwfcIsybZWfIEPpMnim04PNnDMx43/KkBgcgHzA==',
    shasum: '3b1183d5d09c590075990f5221e9316c4c4a3adf',
    dicMD5: '47a33427fefa219e8151ce145ba808dc',
    affMD5: '46a90e548c5fb0c2c75fdb832412029c',
    langCode: CODE_LANG.PL,
    language: 'Polish',
    region: 'Poland'
  },
  'pt-br': {
    code: CODE_LANG_REGION.PT_BR,
    packageName: 'hunspell-dict-pt-br',
    version: '0.0.2',
    integrity: 'sha512-f9jWySWByI+/tLKEUMDhAE5XxuX1/Ye/uh03JrWQmzZYHFfcwUeiv232HGZG+GFVGzK0pEF7CvJrQbpdlx6vPw==',
    shasum: '84f80f692b52a939042bbf257e5eb476b3682c03',
    dicMD5: '2da9e25a143551e1b60185ecffab46d5',
    affMD5: 'aec614c406b1af50c4d792e3dcb7802e',
    langCode: CODE_LANG.PT,
    language: 'Portuguese',
    region: 'Brazil'
  },
  'pt-pt': {
    code: CODE_LANG_REGION.PT_PT,
    packageName: 'hunspell-dict-pt-pt',
    version: '0.0.2',
    integrity: 'sha512-/WsMAaLqtVpMokqeRWHOJ7PNiH9skpee7rRnlpXO57P5ZIne/MfAQIm3RznNiKw1RmfPcbviQPJhgC5XfO+0Wg==',
    shasum: 'bb34d0a00ebcd0c39c65a6c069bf3f3f9432af2a',
    dicMD5: '97b11fe107d7c73da2df941abc662e59',
    affMD5: '5f6ac103ce45bc05679b45e5e13d3e9e',
    langCode: CODE_LANG.PT,
    language: 'Portuguese',
    region: 'Portugal'
  },
  'ro-ro': {
    code: CODE_LANG_REGION.RO_RO,
    packageName: 'hunspell-dict-ro-ro',
    version: '0.0.2',
    integrity: 'sha512-0CeHJRUVQ5Zq8wlfVbIybo2wwgMwU/6RyaMWyH9bOGo56NV9hwctc6F5wT5jhFEYF+ST3DZrY3l62Yih98Yghg==',
    shasum: '1ab5a17335f7d1286f1e6fa556beacff39d42910',
    dicMD5: '437fa96c17edaa99b2331880cdda9719',
    affMD5: '645f78ee94b2bbc9a28684ae2636b83d',
    langCode: CODE_LANG.RO,
    language: 'Romanian',
    region: 'Romania'
  },
  'ru-ru': {
    code: CODE_LANG_REGION.RU_RU,
    packageName: 'hunspell-dict-ru-ru',
    version: '0.0.2',
    integrity: 'sha512-vJ+QIHhigAYvcmGnjg6Dt7GdWSM8TFpG9Egf3ScoW4qweIT0URsZNySmOmDO6zgflFwzbqFIbE/EbNJIXjvcnQ==',
    shasum: '5ab26c9208b261f84c48d09a9eb6cefb2149a2d4',
    dicMD5: 'c63ec5a334809a750fc88ddb5f4c1551',
    affMD5: '9de38166917eabf9a68b633dcf0c4d0f',
    langCode: CODE_LANG.RU,
    language: 'Russian',
    region: 'Russia'
  },
  'sk-sk': {
    code: CODE_LANG_REGION.SK_SK,
    packageName: 'hunspell-dict-sk-sk',
    version: '0.0.2',
    integrity: 'sha512-/81XV8qgBDAfWwGUBZ/83xEPpIWY3FyE8/P/COjQwT/OfI5aVKMQTOqGcnkg1ljblAVxcwLMhSI3PlB/eC/48w==',
    shasum: 'a69738c70ae0b2c815b07c8462c51e65f9879d3e',
    dicMD5: '70784f05fa2883f914c2b32f5e5847a5',
    affMD5: '4fa50a6112b2a14e28cbb18fe9d4d363',
    langCode: CODE_LANG.SK,
    language: 'Slovak',
    region: 'Slovakia'
  },
  'sl-si': {
    code: CODE_LANG_REGION.SL_SI,
    packageName: 'hunspell-dict-sl-si',
    version: '0.0.2',
    integrity: 'sha512-SSPxyIwjOmRJgaEa9bw1goTep+TSzNGdg1H7vtDrVUaTuLUvPuZ8XIiLIKwhJebPMAFAPXrqIhkGA7qVUlc0AQ==',
    shasum: '2ed70c24227020c3a971d95ee0885dae89d9ff58',
    dicMD5: 'c2d7e2eed50bdf5ce864820eeecebbd3',
    affMD5: '0705eafb1587811c7d27e5bfd417a992',
    langCode: CODE_LANG.SL,
    language: 'Slovene',
    region: 'Slovenia'
  },
  sr: {
    code: CODE_LANG_REGION.SR,
    packageName: 'hunspell-dict-sr',
    version: '0.0.2',
    integrity: 'sha512-Ph2eIqAyI9OVKdatCteIT3UzxEghzYIVLsvo0em/e7yTnrnQDjFUtRUh2j8iTbKqPQiWB+GbB9pqUhSPgznC7A==',
    shasum: '955d26e6aae39395265432c21a7647e2c11c3247',
    dicMD5: 'c52d0593e02567e532b1ef153543b2d7',
    affMD5: 'b411e945b19eeaf4e5058954c85931ff',
    langCode: CODE_LANG.SR,
    language: 'Serbian',
    region: 'null'
  },
  'sr-latn': {
    code: CODE_LANG_REGION.SR_LATN,
    packageName: 'hunspell-dict-sr-latn',
    version: '0.0.2',
    integrity: 'sha512-+xOsmswcrH043Wn5bRfEGuw8zB/Ide/176JT04TH6y71QyjPvsNreTIRcTiCNMO81r1UYLO0QFcS0/0CQlNzDQ==',
    shasum: '5a04c72aaf53ea0e94a3d26c2095ce817af6cf7b',
    dicMD5: '3a175631df2e3665dbf9f47a4d4721c7',
    affMD5: '48e090a18bdd73a4f95aa1d62fd07314',
    langCode: CODE_LANG.SR_LATN,
    language: 'Serbian (Lation)'
  },
  'sv-se': {
    code: CODE_LANG_REGION.SV_SE,
    packageName: 'hunspell-dict-sv-se',
    version: '0.0.2',
    integrity: 'sha512-zDtkZ8ak2mpAZtAijHyu+1xsC/7L2tXIa+OzwsJuNlAHc5owqCOw4WeDm7eyH4Tq/P2AJfqZWf/Q22MR2RdRug==',
    shasum: '03636577eef63ad8b5774bee504fed1cad448154',
    dicMD5: '4cb9ab740b85dd90890828c16fc30d51',
    affMD5: 'f7887e3117f09f1fbc327631bdba8eab',
    langCode: CODE_LANG.SV,
    language: 'Swedish',
    region: 'Sweden'
  },
  'ta-in': {
    code: CODE_LANG_REGION.TA_IN,
    packageName: 'hunspell-dict-ta-in',
    version: '0.0.2',
    integrity: 'sha512-GUK8P6PBsr6asLU6716YyLBa18LWuZ6tkAQnEgq5mGbrcZMNRQrPjzDBcW2mLzHqBX96oHrTx+sJk8hVt3yl7w==',
    shasum: 'aab7ecffa5da91719ecf739b32e2a6eb1d520059',
    dicMD5: '2c24723fb6db36e573375b06f06c58ab',
    affMD5: '5725ad33d243d793acb45af90f7ccd66',
    langCode: CODE_LANG.TA,
    language: 'Tamil',
    region: 'India'
  },
  'tg-tg': {
    code: CODE_LANG_REGION.TG_TG,
    packageName: 'hunspell-dict-tg-tg',
    version: '0.0.2',
    integrity: 'sha512-lQE0pn3sfwMz7KT1dIFml7TC6P6AhCnH2vFFMFJotmc1Ga7o8Ejz4lDtYYchq9rJMwixeIrY6GpMq6cF9dPF/Q==',
    shasum: '4ad493b4091f594f50d64d23d347c3e21f605b53',
    dicMD5: '3fa524d8ea8e9254111a111b1c5e6f21',
    affMD5: '0dec71fcb1dc9bc60f67f9a1b0129dd0',
    langCode: CODE_LANG.TG,
    language: 'Tajik',
    region: 'Togo'
  },
  tr: {
    code: CODE_LANG_REGION.TR,
    packageName: 'hunspell-dict-tr',
    version: '0.0.2',
    integrity: 'sha512-gQoG7OVIHSLPV7ocqccUeOU6r5A0hrEd8qTqwt6TIgiBtY6NTKPg/yvlNXKzdvoux7EJ0FzYyeAcg+Y7c40Z7g==',
    shasum: 'd762dae2891f63fd4726a5c922bc73846dcdee92',
    dicMD5: '810ec10f0e5fb34e663c594d566c2770',
    affMD5: 'b9135233d935b52203dc1247c4eaedef',
    langCode: CODE_LANG.TR,
    language: 'Turkish',
    region: 'null'
  },
  'uk-ua': {
    code: CODE_LANG_REGION.UK_UA,
    packageName: 'hunspell-dict-uk-ua',
    version: '0.0.2',
    integrity: 'sha512-6f1SVQ8mSgWy4V3zre9mbRcjkAgoE918A1offRFN5qVrgX5HcoPQg/AuwA6gOFXMdR0agUuFUYCyXGWYJGzHeQ==',
    shasum: '52dc767691ad20cb982d249198eb747f19dfdd91',
    dicMD5: 'b283b14868fd73b60da097802d9aa7ce',
    affMD5: '2e3fd74e3a08c7c6fbd00b0c196e8eee',
    langCode: CODE_LANG.UK,
    language: 'Ukrainian',
    region: 'Ukraine'
  },
  vi: {
    code: CODE_LANG_REGION.VI,
    packageName: 'hunspell-dict-vi',
    version: '0.0.2',
    integrity: 'sha512-SPue7TZ9dO/x2Ep8GjXY6fApgZqISD1PB1EIunHk/eVpG9A3azkHMYnEqsY0UhBUDUyzV2+vC3zW1HroYGhZwA==',
    shasum: '7ac8bfbf8ca568cd1c80e039289488a6ded69005',
    dicMD5: '5cf11d16d81eeb17a761e90554852951',
    affMD5: 'fcad437d532a2978b5cd3f98bbfb2d42',
    langCode: CODE_LANG.VI,
    language: 'Vietnamese',
    region: 'null'
  }
};

export { CODE_LANG_REGION, CODE_LANG, languageCodeMapper, DictionaryManifest, manifest };
