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
    version: '0.1.0',
    integrity: 'sha512-tqgzkJQesTvSwYdgW7Tbo+rrPDl47+RiunAqCbB9j42Zeh49atIAV1iMt7ack3Ibz9jdQhSON6emkiSeG11Pdg==',
    shasum: '5d17b04cbb6918ddc76aeb708232efcd0400903b',
    dicMD5: '9672b1b11231484e7af10c510b023262',
    affMD5: 'ac6604b3e4cfa3863204555da482ec7e',
    langCode: CODE_LANG.BG,
    language: 'Bulgarian',
    region: 'Bulgaria'
  },
  'ca-es': {
    code: CODE_LANG_REGION.CA_ES,
    packageName: 'hunspell-dict-ca-es',
    version: '0.1.0',
    integrity: 'sha512-8NCW5bI6ZyBWq1l2GQnX7OYOL4sneSwvrN4nkkNvhAjVJT3+QCMVWfuh7swuoSS8cCacDtZLPhJpIkvR4IzgRw==',
    shasum: 'fadad8e85ba4d62a0ecce0a20a220b6331694792',
    dicMD5: '9a75d2db18726a5afc0c506493abe2b2',
    affMD5: '63bd530fc94667ef48a01dcf6015499e',
    langCode: CODE_LANG.CA,
    language: 'Catalan',
    region: 'Spain'
  },
  'cs-cz': {
    code: CODE_LANG_REGION.CS_CZ,
    packageName: 'hunspell-dict-cs-cz',
    version: '0.1.0',
    integrity: 'sha512-ZfycqQhR1oAUk3vEFdU+l9fCMFVlKUX/Pv462BiSUBq8o2nr8MS+iWI+SNG0VB5eqxnpcBjRQHNb4o/JHIOaeg==',
    shasum: '9824b1f7c0cc144342b988090bb94bc3f650d3e8',
    dicMD5: '2c4b69862736c7fbdd99177e9e6d5646',
    affMD5: '11187d5df5cfa67a0717af206c19031f',
    langCode: CODE_LANG.CS,
    language: 'Czech',
    region: 'Czech Republic'
  },
  'da-dk': {
    code: CODE_LANG_REGION.DA_DK,
    packageName: 'hunspell-dict-da-dk',
    version: '0.1.0',
    integrity: 'sha512-fyqTDgwCnmU6QX07sbjUkG0r3cnWz95RpjzgsEksewnujiSoJhfp68kUedMKJLotbiDOs818TjtgZrDyOdyHzg==',
    shasum: '521206c3a53d3e81ae73d399b7a849aa10a9bd05',
    dicMD5: '455a498af8ff9618041952d5d5f21775',
    affMD5: 'af05622c4e14dfc0f12095077b812484',
    langCode: CODE_LANG.DA,
    language: 'Danish',
    region: 'Denmark'
  },
  'de-at': {
    code: CODE_LANG_REGION.DE_AT,
    packageName: 'hunspell-dict-de-at',
    version: '0.1.0',
    integrity: 'sha512-1ySd+JOsXcuCNGeQySqWOqJfGun8VO3oVHpI6lsDS3OldRS6t7+rhVzVI7ptQRPHUfFl2mrejvnZHbez8wWVPA==',
    shasum: 'f566f3d5ffab4c1ff1542223c6f2279d2e59b257',
    dicMD5: '34dc8ab8ccecc3cadb5c288cdb92caf0',
    affMD5: '923abbd9e6fea52c5f472259737566bd',
    langCode: CODE_LANG.DE,
    language: 'German',
    region: 'Austria'
  },
  'de-ch': {
    code: CODE_LANG_REGION.DE_CH,
    packageName: 'hunspell-dict-de-ch',
    version: '0.1.0',
    integrity: 'sha512-wiZaLLu1xJZg6u7IA4iVuKsEpTSPVg3+fH0C3fsWA11AhoXL2IKPi9vh9c/oOQZbApiq6tQATcQPBQmPOORuVA==',
    shasum: '966e963a94ca4e3966ce337c869694b4ee51a7f8',
    dicMD5: 'e721436afa0d804a3113be11a610f015',
    affMD5: 'b34b57d067d8a0653c98be8d220f0f27',
    langCode: CODE_LANG.DE,
    language: 'German',
    region: 'Switzerland'
  },
  'de-de': {
    code: CODE_LANG_REGION.DE_DE,
    packageName: 'hunspell-dict-de-de',
    version: '0.1.0',
    integrity: 'sha512-arBIIY3gBt+potFS/lceyaEGwb9WpxuU1V/nojc5mN5hnCI9m4fDn7LxqDkJaYZKIZ5h2wF5ADYwlEVMwIA5JA==',
    shasum: 'a23f686c9f27160aa4c52ba8ceb3c68317b02324',
    dicMD5: '2f7d324c56cd32ee176c4ec5351e0701',
    affMD5: '4fd619072d6e371d648f6bd618470412',
    langCode: CODE_LANG.DE,
    language: 'German',
    region: 'Germany'
  },
  'el-gr': {
    code: CODE_LANG_REGION.EL_GR,
    packageName: 'hunspell-dict-el-gr',
    version: '0.1.0',
    integrity: 'sha512-Dvz2xVx0Ps8LiiIfSV2eYMmmZ2GQku6ZMB63LgPveMVBWqXJ4vjP5h1mw/MEvjOKJ7EoPbCTUTy3dJvSizb1yw==',
    shasum: 'f74a3deac390d7af9b03b8de21fa6089ca3aa997',
    dicMD5: '246378b802cd92e86c7373c248509bd5',
    affMD5: '30b40b42ba11611f012e6fdcdb614129',
    langCode: CODE_LANG.EL,
    language: 'Greek',
    region: 'Greece'
  },
  'en-au': {
    code: CODE_LANG_REGION.EN_AU,
    packageName: 'hunspell-dict-en-au',
    version: '0.1.0',
    integrity: 'sha512-IxBMSU3+CndgtjNFrrWwJov9ZQB/LX5dhCSL2tCuawWDSwACk+nB9PzoNYCK6OZrjf2pv3/lYdKCZAhojWcohA==',
    shasum: 'b13cef220533ce5e1b27c1c8a5e14b2cee084345',
    dicMD5: '44f8c7f213b4f34251dafaf134ee91a0',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'Australia'
  },
  'en-ca': {
    code: CODE_LANG_REGION.EN_CA,
    packageName: 'hunspell-dict-en-ca',
    version: '0.1.0',
    integrity: 'sha512-UkkgvlxKiLsbsbmzY56S78JAVWodFGKJjgrRFiHfqfci1tjCcxpxJ68bTnpapkaPX/OgBBq+v1NkrIUbjjcwOw==',
    shasum: '3f7902a518183e88dd6a9cc77fc82d82d90e0c80',
    dicMD5: '817cc0d357b3de664dc726be298517d4',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'Canada'
  },
  'en-gb': {
    code: CODE_LANG_REGION.EN_GB,
    packageName: 'hunspell-dict-en-gb',
    version: '0.1.0',
    integrity: 'sha512-kvPfy6KJ9KBFlRLR//kkmB8rBexfTnFdm/rbi4eUWxXZ+04+pu/0UE204cV/bDr29p+HD9aCkGZJLLojCUv+Ag==',
    shasum: '6553d1c645de6419f43bfd4e12c8f806aa7243dc',
    dicMD5: '0bb63562a8d4f551810c393da3becdb6',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'United Kingdom'
  },
  'en-us': {
    code: CODE_LANG_REGION.EN_US,
    packageName: 'hunspell-dict-en-us',
    version: '0.1.0',
    integrity: 'sha512-CtdGlTqOMGQYabidE92rhCTiVj3MqmQp9SUAao6XLRTXkHduZkjd8ATT3bCV4sLhxn+lPFNetQnrNfrOyR6osw==',
    shasum: '490ab0ed46c42f43b8cb8c891cb7d843d3cc993f',
    dicMD5: '68f7def0b89e816b0dcabdbef1724159',
    affMD5: 'eaae9bae63b305440b412a48e1653a26',
    langCode: CODE_LANG.EN,
    language: 'English',
    region: 'United States'
  },
  'es-es': {
    code: CODE_LANG_REGION.ES_ES,
    packageName: 'hunspell-dict-es-es',
    version: '0.1.0',
    integrity: 'sha512-4vi0udhEKnpuRXlum8Y+iizZgmCxQUsPuWP5i9feyuU9yjHg/7ioQUptzTxpDkExiuLWAaHmGeER7bwiQ9HHiQ==',
    shasum: '1cbbe8222551c5cbae7dad08aed695c115fe8976',
    dicMD5: 'ac93227635f20d53e9e8233d44102a62',
    affMD5: 'abcdc0ce99c387610506f38e3585a56f',
    langCode: CODE_LANG.ES,
    language: 'Spanish',
    region: 'Spain'
  },
  'et-ee': {
    code: CODE_LANG_REGION.ET_EE,
    packageName: 'hunspell-dict-et-ee',
    version: '0.1.0',
    integrity: 'sha512-OjuPea6rTf9710T+wMX8dIzQKWc/T3aD92Lrd71v6cV6X1IeqJ75QJcErxW2hOBoUm+TL/U+i1enNfkE3CbqjA==',
    shasum: 'fb8809ad76efb480c36f11bce6c38fb2021ca955',
    dicMD5: '7b95b5586b031d7643d0dbc56c6e7838',
    affMD5: 'fee077bcac75b375aa6bb5b7839f0839',
    langCode: CODE_LANG.ET,
    language: 'Estonian',
    region: 'Estonia'
  },
  'fa-ir': {
    code: CODE_LANG_REGION.FA_IR,
    packageName: 'hunspell-dict-fa-ir',
    version: '0.1.0',
    integrity: 'sha512-6DUi04Dyz51k1Al1nGYTdDCSlpivfhbDfJTdwXO5Am/6PsDCut2a4UrGTrUuU6t6WB8lTQH2/bGodu/H7CIilg==',
    shasum: '3258779794e31297fdfdecde9b56ac9b340652ca',
    dicMD5: '1138a448bad5f7677b1fe461ed00480a',
    affMD5: '8de22a87459fd852c505c40fc043ed9e',
    langCode: CODE_LANG.FA,
    language: 'Persian',
    region: 'Iran'
  },
  'fo-fo': {
    code: CODE_LANG_REGION.FO_FO,
    packageName: 'hunspell-dict-fo-fo',
    version: '0.1.0',
    integrity: 'sha512-M4y4wY4XyxTBR4F+5jlKS4GR+WkivXjhNAebMSu5JOAL4m3YFWhWSdwOBD49EgC1i1rEmlk/LtA/Gw/RTVgAMw==',
    shasum: 'ce956bedae7ce16751fd505106e5950bfa11043b',
    dicMD5: '55c94ed87172a356ea25fba1f1029f94',
    affMD5: 'be65ebf1da937d8a8031d448ee087f87',
    langCode: CODE_LANG.FO,
    language: 'Faroese',
    region: 'Faroe Islands'
  },
  'fr-fr': {
    code: CODE_LANG_REGION.FR_FR,
    packageName: 'hunspell-dict-fr-fr',
    version: '0.1.0',
    integrity: 'sha512-tvfV4T9hqCc+Zh0GhMDizJAbl4iLtyRYdd9XaWITD+1Q5zYxcCWi0EYfiuIdm9kC9w8+k2cOfVF4RgU3nfeKRQ==',
    shasum: '785cd2a8496cab2dc7e5706a3c38ee57a3a5497a',
    dicMD5: '32f33ac4e3a44d41f6c284c3d327d3ef',
    affMD5: 'fdf0fda98f3f911c7ad7b8a269fff10b',
    langCode: CODE_LANG.FR,
    language: 'French',
    region: 'France'
  },
  'he-il': {
    code: CODE_LANG_REGION.HE_IL,
    packageName: 'hunspell-dict-he-il',
    version: '0.1.0',
    integrity: 'sha512-07R45Fnj6Kzy6HvX9EfHurwlDYSHY1jZjmsHNZVAypf3UHXuoo3j7ZRBOYK4qRI+NnWq6W11D9idu6SVKWUVRg==',
    shasum: '32044dd1eb8a3d436e6779a6941365da48c5e027',
    dicMD5: '12fa0053722614a21bcce67d5eead799',
    affMD5: 'bec58ce5c6c0b0c39a44a1fc9c4ab522',
    langCode: CODE_LANG.HE,
    language: 'Hebrew',
    region: 'Israel'
  },
  'hr-hr': {
    code: CODE_LANG_REGION.HR_HR,
    packageName: 'hunspell-dict-hr-hr',
    version: '0.1.0',
    integrity: 'sha512-mgdwZrCZjnq5mcVDSzDdwOLWKkVB8euLt87+oytyaTu+2XF3FkpjNuRGJPlLC7ksNI1Q9pooz/v1Fv+176iwoA==',
    shasum: '86df0e12154b1703c448e8bfad398a7df52ebe44',
    dicMD5: 'c31fc81ad491d3e531de1214f835a0fd',
    affMD5: 'ba571af2cd9fb9254fde55711efbefe3',
    langCode: CODE_LANG.HR,
    language: 'Croatian',
    region: 'Croatia'
  },
  'hu-hu': {
    code: CODE_LANG_REGION.HU_HU,
    packageName: 'hunspell-dict-hu-hu',
    version: '0.1.0',
    integrity: 'sha512-S8ynR62m/5SibSrGY20yN5QAL8S23C/chfYFtih0lxjM1P21yPWPxT5Xr2CIQj8ZLN6bhuK819eGfVo5OgkV0A==',
    shasum: '0448887ef876e5d91fe306967957e3d83bed8657',
    dicMD5: '28d7bd9bbfdd52424d4f053a3045f0d0',
    affMD5: '114df2b4458a9a41db5db395d49f531d',
    langCode: CODE_LANG.HU,
    language: 'Hungarian',
    region: 'Hungary'
  },
  'it-it': {
    code: CODE_LANG_REGION.IT_IT,
    packageName: 'hunspell-dict-it-it',
    version: '0.1.0',
    integrity: 'sha512-KapHWRot9nnuFnyvkFrv9tYiy010besKtFVFRAeUYbIlVLXIQRD//ZMf/bjb/AG0ieI5YJawrvE2Cul012UQFA==',
    shasum: '099b85bca60d1256a13b4ed955ead179d4d1dcc6',
    dicMD5: 'fddb8fff08a4c9f9ea531f1d4720252f',
    affMD5: 'f2d9df5c84af5d94df471ab144046add',
    langCode: CODE_LANG.IT,
    language: 'Italian',
    region: 'Italy'
  },
  ko: {
    code: CODE_LANG_REGION.KO,
    packageName: 'hunspell-dict-ko',
    version: '0.1.0',
    integrity: 'sha512-wJ2KHP30AaXcKvz+6iOvJrfN96/JXN5LoznOY+EuP6+162Zh3GTh4Gnr1tbexmROM1b90qNzSPiD8H+TXBZTfg==',
    shasum: 'fedf1572d057e8093e179cecd19c5e2580478680',
    dicMD5: '58ab72addba0b22ae908176970c01bc4',
    affMD5: '9ae40c3cf7759b43f5ec1f6fd05648df',
    langCode: CODE_LANG.KO,
    language: 'Korean',
    region: 'null'
  },
  'lt-lt': {
    code: CODE_LANG_REGION.LT_LT,
    packageName: 'hunspell-dict-lt-lt',
    version: '0.1.0',
    integrity: 'sha512-5pogcoR9x+HNfacqCfdfbD3pAyNHZ3lucEYfXgk238TVYI2usy8HMxFJ0oeMI2y3mXLC7PiYQKkQ281EBtppnQ==',
    shasum: 'c669cab8aebf8ebfd0546d1765180958dc8c0607',
    dicMD5: 'dd2389c8c67a4477921a1341564d9e9b',
    affMD5: '583826dd8b85b0a71158c10634c532ae',
    langCode: CODE_LANG.LT,
    language: 'Lithuanian',
    region: 'Lithuania'
  },
  'lv-lv': {
    code: CODE_LANG_REGION.LV_LV,
    packageName: 'hunspell-dict-lv-lv',
    version: '0.1.0',
    integrity: 'sha512-81OVwuBPMeJ01ZXlVrfNXT0G7g8gXLus067U8v4fgSJBTqe+1ZAzArQQea3JL2ChCCYlrReJuB9bu0OqVzo6Iw==',
    shasum: '3a834b8fe8e2c167be805b309de17dd50c8cddc8',
    dicMD5: '4ac7de72dcc8ce69d6a3eebce8fc9e6e',
    affMD5: '3166a42b5663042726a00a0e54cb5a27',
    langCode: CODE_LANG.LV,
    language: 'Latvian',
    region: 'Latvia'
  },
  'nb-no': {
    code: CODE_LANG_REGION.NB_NO,
    packageName: 'hunspell-dict-nb-no',
    version: '0.1.0',
    integrity: 'sha512-CPphC/KCrBFiD7Ys8UGWq37EbaAPOqresfzvcqDPi/LM45+rv2IWXPw7PvItYDNl9D06O9xWV/sXr3bIxmMung==',
    shasum: 'c450d99528d71cd42d545facffd8fa4fb342be69',
    dicMD5: 'fba178582f47956d820a0a66bb1c799a',
    affMD5: '99df3013d7e46e70068c5607665395d3',
    langCode: CODE_LANG.NB,
    language: 'Norwegian Bokmål',
    region: 'Norway'
  },
  'nl-nl': {
    code: CODE_LANG_REGION.NL_NL,
    packageName: 'hunspell-dict-nl-nl',
    version: '0.1.0',
    integrity: 'sha512-XNQ3T1xfhgMbXgFH8KO/smbdFB2AmJqWnb41r0+5oKYlWF5E/p0zwU5ZlMRerUBwV96lAlYpdjHW7PG9vWIItA==',
    shasum: '4f050095920c9993277fa7267fb3aa047de8c712',
    dicMD5: '73a1de7e1f83ce6c8280a9152851d8eb',
    affMD5: '028ad724f26b6ac14333d88e6242ca1a',
    langCode: CODE_LANG.NL,
    language: 'Dutch',
    region: 'Netherlands'
  },
  'pl-pl': {
    code: CODE_LANG_REGION.PL_PL,
    packageName: 'hunspell-dict-pl-pl',
    version: '0.1.0',
    integrity: 'sha512-rzrp9plArXkJgOZ5o1r2MHgnDZ0JBjGkq0+4GqGlxKkODEV3mMqUhTQt2E9PlSzvQdgUuH+nEyoW4H17PwyD4A==',
    shasum: 'e23e6c81334cf4d9437581c7579e191079eb8257',
    dicMD5: '47a33427fefa219e8151ce145ba808dc',
    affMD5: '46a90e548c5fb0c2c75fdb832412029c',
    langCode: CODE_LANG.PL,
    language: 'Polish',
    region: 'Poland'
  },
  'pt-br': {
    code: CODE_LANG_REGION.PT_BR,
    packageName: 'hunspell-dict-pt-br',
    version: '0.1.0',
    integrity: 'sha512-l5NW/9XhY43foGVdW/MEmt3FD/daFaQ72qecHhDx+Qw6KxVq/IKQkYFdUVT/2+DhEPWnYsApgRR0webbaWfq7Q==',
    shasum: '80b3096d0c6151b380f49b0ec745f78ad9879722',
    dicMD5: '2da9e25a143551e1b60185ecffab46d5',
    affMD5: 'aec614c406b1af50c4d792e3dcb7802e',
    langCode: CODE_LANG.PT,
    language: 'Portuguese',
    region: 'Brazil'
  },
  'pt-pt': {
    code: CODE_LANG_REGION.PT_PT,
    packageName: 'hunspell-dict-pt-pt',
    version: '0.1.0',
    integrity: 'sha512-6JjhY+fPb0eXWp6kuiKezyViqXqYAgxeHcnegGRQMMrH3ixrq1UeAXSDg4LpmPFYeqh7U/bWoHDeCb7E0nnt8A==',
    shasum: '11cf384e6c2ddf81ca799dd76133a11e62640e71',
    dicMD5: '97b11fe107d7c73da2df941abc662e59',
    affMD5: '5f6ac103ce45bc05679b45e5e13d3e9e',
    langCode: CODE_LANG.PT,
    language: 'Portuguese',
    region: 'Portugal'
  },
  'ro-ro': {
    code: CODE_LANG_REGION.RO_RO,
    packageName: 'hunspell-dict-ro-ro',
    version: '0.1.0',
    integrity: 'sha512-45N3/L1bBGB76s8CaJ4rpgd5Jj+2bM80LfZOf19DCrQ/AdOnxxD92Y9GuVdXXU7aI48ffCmdVXQhDKwSrrftOw==',
    shasum: 'faf8bd523ea6791ddbb55de4ed56e3bd8bfcb950',
    dicMD5: '437fa96c17edaa99b2331880cdda9719',
    affMD5: '645f78ee94b2bbc9a28684ae2636b83d',
    langCode: CODE_LANG.RO,
    language: 'Romanian',
    region: 'Romania'
  },
  'ru-ru': {
    code: CODE_LANG_REGION.RU_RU,
    packageName: 'hunspell-dict-ru-ru',
    version: '0.1.0',
    integrity: 'sha512-XyeHkZCt2Kaalo+HqfNznE6Etv/opSoxXS+Qcl4PYUHDIGX6Qs9K9mf7D40vMwEmaWO9dIxSYLuQHf4juP+5Yw==',
    shasum: '62a6f20c2c687d9038680b922f73f0551f38c198',
    dicMD5: 'c63ec5a334809a750fc88ddb5f4c1551',
    affMD5: '9de38166917eabf9a68b633dcf0c4d0f',
    langCode: CODE_LANG.RU,
    language: 'Russian',
    region: 'Russia'
  },
  'sk-sk': {
    code: CODE_LANG_REGION.SK_SK,
    packageName: 'hunspell-dict-sk-sk',
    version: '0.1.0',
    integrity: 'sha512-d8eb38OnaqtRIXTeJBGn2YHQFZq87fuUJ6tZyDjdS0YiEcvVolWGssU4CiZ+QqiVqH4JkH+JqebKMoHvjBeobg==',
    shasum: '7fc5ba2065e4da2c9f59c6a3d17c4b9eff174dc8',
    dicMD5: '70784f05fa2883f914c2b32f5e5847a5',
    affMD5: '4fa50a6112b2a14e28cbb18fe9d4d363',
    langCode: CODE_LANG.SK,
    language: 'Slovak',
    region: 'Slovakia'
  },
  'sl-si': {
    code: CODE_LANG_REGION.SL_SI,
    packageName: 'hunspell-dict-sl-si',
    version: '0.1.0',
    integrity: 'sha512-lzuWxUCkQFxlFUD8yEHuXFHzR6YFq1HYcC4lmmrOGWomQ8qQQrxiwGTIYBy+/8nCNibMCG9hlNfJ6s03sJbAXQ==',
    shasum: '9f590c059b3c24af9b9c5522b8faaaa03d482c1f',
    dicMD5: 'c2d7e2eed50bdf5ce864820eeecebbd3',
    affMD5: '0705eafb1587811c7d27e5bfd417a992',
    langCode: CODE_LANG.SL,
    language: 'Slovene',
    region: 'Slovenia'
  },
  sr: {
    code: CODE_LANG_REGION.SR,
    packageName: 'hunspell-dict-sr',
    version: '0.1.0',
    integrity: 'sha512-hA8MyMcy2wEHgg8auY8b1IXOdPZOchLgy+BPDuiTKu87GzXbcxFdKrIAKlkqi9W9C0nbl3wQVynZjMPtMVLDlg==',
    shasum: '11679847b9d2ed2ed7f7cfd425934a65c0685fc1',
    dicMD5: 'c52d0593e02567e532b1ef153543b2d7',
    affMD5: 'b411e945b19eeaf4e5058954c85931ff',
    langCode: CODE_LANG.SR,
    language: 'Serbian',
    region: 'null'
  },
  'sr-latn': {
    code: CODE_LANG_REGION.SR_LATN,
    packageName: 'hunspell-dict-sr-latn',
    version: '0.1.0',
    integrity: 'sha512-2s6Vt7KEUpdpt+qFMrq59HQgOdCaZpNMMVTBJ2rr+IrOcPeCliMRvSyKT6dCp7XfOEaIcyF6w8EZrFfIQ1UufQ==',
    shasum: '318428539cb79b674cb272e93e1286c75ac91c39',
    dicMD5: '3a175631df2e3665dbf9f47a4d4721c7',
    affMD5: '48e090a18bdd73a4f95aa1d62fd07314',
    langCode: CODE_LANG.SR_LATN,
    language: 'Serbian (Lation)'
  },
  'sv-se': {
    code: CODE_LANG_REGION.SV_SE,
    packageName: 'hunspell-dict-sv-se',
    version: '0.1.0',
    integrity: 'sha512-6RDpWjpZ90ndEes0eQq3S2AasRFOMvdZAXaSaCgq73ZMoB7ny0B2AP8pPr06TU5Zz/3hDUmpHiOC+1Q5MyJd6A==',
    shasum: 'e7a678480b5985b5810e00e17ae875b05a601394',
    dicMD5: '4cb9ab740b85dd90890828c16fc30d51',
    affMD5: 'f7887e3117f09f1fbc327631bdba8eab',
    langCode: CODE_LANG.SV,
    language: 'Swedish',
    region: 'Sweden'
  },
  'ta-in': {
    code: CODE_LANG_REGION.TA_IN,
    packageName: 'hunspell-dict-ta-in',
    version: '0.1.0',
    integrity: 'sha512-2Fp4DaSJxPeZKeO7l+qjKwZl/D8Ve8ny+bq8EoNZ4+saKwuMpDIjpNMzAfKy8T2JBNGw447OYdvSQaEH9cimQQ==',
    shasum: 'ecf4dea29e0f05c5be096689d6bb38825ed7669f',
    dicMD5: '2c24723fb6db36e573375b06f06c58ab',
    affMD5: '5725ad33d243d793acb45af90f7ccd66',
    langCode: CODE_LANG.TA,
    language: 'Tamil',
    region: 'India'
  },
  'tg-tg': {
    code: CODE_LANG_REGION.TG_TG,
    packageName: 'hunspell-dict-tg-tg',
    version: '0.1.0',
    integrity: 'sha512-wdAGdOYmcam+iCOD0rszFX/i+KdGH9UYiAv68yLFjsfmxjj+CZvEwbxTF4PXr50H6r2/ckJxnqzmfCUeB7jBEQ==',
    shasum: 'dcfa54d5f126f8337aa4b743db94f942f7a11316',
    dicMD5: '3fa524d8ea8e9254111a111b1c5e6f21',
    affMD5: '0dec71fcb1dc9bc60f67f9a1b0129dd0',
    langCode: CODE_LANG.TG,
    language: 'Tajik',
    region: 'Togo'
  },
  tr: {
    code: CODE_LANG_REGION.TR,
    packageName: 'hunspell-dict-tr',
    version: '0.1.0',
    integrity: 'sha512-AM4KKCe98vY+Tgmt1ibkwbOxw9R/SIrIl4QWnjdnFx/X863xELTP6uawhZBTuYMdjtO7TdAuYqrMAGgO0gOkGw==',
    shasum: 'f964ea47581747a0a90d6fb8dfd8f8e7c02103c3',
    dicMD5: '810ec10f0e5fb34e663c594d566c2770',
    affMD5: 'b9135233d935b52203dc1247c4eaedef',
    langCode: CODE_LANG.TR,
    language: 'Turkish',
    region: 'null'
  },
  'uk-ua': {
    code: CODE_LANG_REGION.UK_UA,
    packageName: 'hunspell-dict-uk-ua',
    version: '0.1.0',
    integrity: 'sha512-i0EfJkftODQdU0Sw6nFX9x2pmXe9nI/Vtmjv50M9r5Frm/HzDd7Ev4kmjs8B+POqL8thbrq1mrms/Nb2cMnTMw==',
    shasum: 'b34c24cadbb35b1c749c8162639a00c08d9528ce',
    dicMD5: 'b283b14868fd73b60da097802d9aa7ce',
    affMD5: '2e3fd74e3a08c7c6fbd00b0c196e8eee',
    langCode: CODE_LANG.UK,
    language: 'Ukrainian',
    region: 'Ukraine'
  },
  vi: {
    code: CODE_LANG_REGION.VI,
    packageName: 'hunspell-dict-vi',
    version: '0.1.0',
    integrity: 'sha512-2R5HcaYR2hWDTZGxagLTTbbez6F2tIfSHhVV5PzabYxzrgOBi6BMnb5TlpH6M4xFP++TnNSWgKbzVJKhkUfYVw==',
    shasum: '2324626ed6e71fd8444c0782bfef1ac1c58bec7a',
    dicMD5: '5cf11d16d81eeb17a761e90554852951',
    affMD5: 'fcad437d532a2978b5cd3f98bbfb2d42',
    langCode: CODE_LANG.VI,
    language: 'Vietnamese',
    region: 'null'
  }
};

export { CODE_LANG_REGION, CODE_LANG, languageCodeMapper, DictionaryManifest, manifest };
