//this file is auto generated, do not modify manually
enum DICT_LANGUAGE {
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
* interfaces for manifest of each dictionary.
*/
interface DictionaryManifest {
  /**
   * Language of dictionary, formed as xx-yy. xx represents language code, yy represents region.
   * Some languages doesn't have region code will have xx part only.
   */
  language: DICT_LANGUAGE;
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
const manifest: { [index in DICT_LANGUAGE]: Readonly<DictionaryManifest> } = {
  'bg-bg': {
    language: DICT_LANGUAGE.BG_BG,
    packageName: 'hunspell-dict-bg-bg',
    version: '0.0.1',
    integrity: 'sha512-X9c7pixI6c1u90sumS3Nx51UPJQkILI3L0SP+j4a0vt0cTq34c0Q9lLz+7dK0grL00EGfGi7zWt5peDNwQoKqA==',
    shasum: '2f8b3ac09f32e6baeed8d456749a284325b1e290',
    dicMD5: '9672b1b11231484e7af10c510b023262',
    affMD5: 'ac6604b3e4cfa3863204555da482ec7e'
  },
  'ca-es': {
    language: DICT_LANGUAGE.CA_ES,
    packageName: 'hunspell-dict-ca-es',
    version: '0.0.1',
    integrity: 'sha512-hYhVX6Y8Lid02O7yI46CKZ8NDLbtVeKPXuCL/Uplm3zhRsVWNR1nlbeQaJ7F7oEU1pBiFcx0lKSjBt3FnTDBMA==',
    shasum: '2dd0f8411754b1847f15fdd6d1836763137817bf',
    dicMD5: '9a75d2db18726a5afc0c506493abe2b2',
    affMD5: '63bd530fc94667ef48a01dcf6015499e'
  },
  'cs-cz': {
    language: DICT_LANGUAGE.CS_CZ,
    packageName: 'hunspell-dict-cs-cz',
    version: '0.0.1',
    integrity: 'sha512-ST+oAe15ESJ31yWxAlNFiP1v2XRNBoXkw2IJq9B+OAnpnr4VzJCQTaI7ydM7wiwJ4pQZ011d162GDHIaWyJUrg==',
    shasum: '02971e547db82b8cebc310ef639c58d5e464d6a3',
    dicMD5: '2c4b69862736c7fbdd99177e9e6d5646',
    affMD5: '11187d5df5cfa67a0717af206c19031f'
  },
  'da-dk': {
    language: DICT_LANGUAGE.DA_DK,
    packageName: 'hunspell-dict-da-dk',
    version: '0.0.1',
    integrity: 'sha512-ugtJY/KdoBLkIf55bi91KtCay0B4RhGWnonG3L9dXFrRwZ3PtZotfQh2TytB7dZ56HTv/BFnZzX/PeozjVsX9Q==',
    shasum: '938d962fe0ff8b429086b567c8a48a6c520440e5',
    dicMD5: '455a498af8ff9618041952d5d5f21775',
    affMD5: 'af05622c4e14dfc0f12095077b812484'
  },
  'de-at': {
    language: DICT_LANGUAGE.DE_AT,
    packageName: 'hunspell-dict-de-at',
    version: '0.0.1',
    integrity: 'sha512-W/qCOqVA6X+uv4WdqQg/Nq3Q5HMFjiGzEa/KKOLe/fMXUnq0wgS4oMlV4QoL0Hpzs4TNHKEpvpQMTrII+LSUAQ==',
    shasum: 'fbfc70160767451764043c1e5335c9fee1d7e4f4',
    dicMD5: '34dc8ab8ccecc3cadb5c288cdb92caf0',
    affMD5: '923abbd9e6fea52c5f472259737566bd'
  },
  'de-ch': {
    language: DICT_LANGUAGE.DE_CH,
    packageName: 'hunspell-dict-de-ch',
    version: '0.0.1',
    integrity: 'sha512-azUrne/v8DfYFgaVYVGyuZx6JVTeUbCI4Si1wAMaH+ab9KRRRpLrffV+PIrwSkccAUhiOfdqwq18EReMhEFkHw==',
    shasum: '7ea5a26937544abb855dcedbd90924c255f28c59',
    dicMD5: 'e721436afa0d804a3113be11a610f015',
    affMD5: 'b34b57d067d8a0653c98be8d220f0f27'
  },
  'de-de': {
    language: DICT_LANGUAGE.DE_DE,
    packageName: 'hunspell-dict-de-de',
    version: '0.0.1',
    integrity: 'sha512-yw/WfW3kBZ7/L3bdj3aV0Wnw9vjJGPdg+niYixe3X7u0j4GmteLmXPULUmTOCVHACWKQ7NEFqPuZsIisi3zn8Q==',
    shasum: '6d203273d55db3fae27d7ed69c7a3e79ac81af9f',
    dicMD5: '2f7d324c56cd32ee176c4ec5351e0701',
    affMD5: '4fd619072d6e371d648f6bd618470412'
  },
  'el-gr': {
    language: DICT_LANGUAGE.EL_GR,
    packageName: 'hunspell-dict-el-gr',
    version: '0.0.1',
    integrity: 'sha512-jfy/fulEDZGh9oV1j/DLw9HdvFJe0e8pn8p0SKCONj6cIMuEk7lylbpSK3UO0zMDQ2PxSF74CYQGYChCSmynNw==',
    shasum: 'ccf1321ea03d72fbc12b2432cc21d0bc67f47422',
    dicMD5: '246378b802cd92e86c7373c248509bd5',
    affMD5: '30b40b42ba11611f012e6fdcdb614129'
  },
  'en-au': {
    language: DICT_LANGUAGE.EN_AU,
    packageName: 'hunspell-dict-en-au',
    version: '0.0.1',
    integrity: 'sha512-IrjUXrnnZVhFgBdhgT+PNW34K5G0x5oyAwU/u8m1Vd9P3YfrVxEXs9uGbgw9/whsLTPPgCg/6huRPJo7fYgbmA==',
    shasum: '9895026e35dba947f50b86c8cfc32e994ab8838b',
    dicMD5: 'fb9a23797b482d621ee71bf18fe804c6',
    affMD5: 'eaae9bae63b305440b412a48e1653a26'
  },
  'en-ca': {
    language: DICT_LANGUAGE.EN_CA,
    packageName: 'hunspell-dict-en-ca',
    version: '0.0.1',
    integrity: 'sha512-OJiQmK09TiuaZrcDRVlRp12LeUlhwe2q/W+CtANeskK9wD8UlJky3SNEqGvh43Xqx051yQgOmUVHkCMhf8D7/Q==',
    shasum: 'd0ea98aed720169ea02d5f15d445b58a362b9b2e',
    dicMD5: 'c98d157ef0b1030e6133fd63350f8397',
    affMD5: 'eaae9bae63b305440b412a48e1653a26'
  },
  'en-gb': {
    language: DICT_LANGUAGE.EN_GB,
    packageName: 'hunspell-dict-en-gb',
    version: '0.0.1',
    integrity: 'sha512-+08zlzZ6O2r4c48ZobvI7qPvmpl4vXfR+N4vWSO+PVEaS/I9lYykh3F8tISgkGyR6WPluzc5LxwGfte5aO3gxQ==',
    shasum: '7eef1158144ce73ff34ebb681b670f272bc72e21',
    dicMD5: '9c081b06d0db79d238e0d305780afa3d',
    affMD5: 'eaae9bae63b305440b412a48e1653a26'
  },
  'en-us': {
    language: DICT_LANGUAGE.EN_US,
    packageName: 'hunspell-dict-en-us',
    version: '0.0.1',
    integrity: 'sha512-AzHGxjh53Gtl6ShsjBu09V35GT4lhd/bRk8Y3TSAV+ad4nsHmlvZVz/HnNdptgWjIoNjhEdWY0gwcgM+A/KN3w==',
    shasum: '011ad8a8bf6fc235a7bbe1e9fbb498e63a9a1d7a',
    dicMD5: 'ecba047c3b6d6b941aa78153959097c0',
    affMD5: 'eaae9bae63b305440b412a48e1653a26'
  },
  'es-es': {
    language: DICT_LANGUAGE.ES_ES,
    packageName: 'hunspell-dict-es-es',
    version: '0.0.1',
    integrity: 'sha512-8ZZWIM0/xT34CmjdS6tXlcwREMu7AGgbp+I7ASYuMD1q0Dq1XC+/ZPDKeZ6OO2JYH9202jahM6FN1iDB/N/zSg==',
    shasum: 'e97af3f1c0f13e7220887a6ef7aca67994f5c9bb',
    dicMD5: 'ac93227635f20d53e9e8233d44102a62',
    affMD5: 'abcdc0ce99c387610506f38e3585a56f'
  },
  'et-ee': {
    language: DICT_LANGUAGE.ET_EE,
    packageName: 'hunspell-dict-et-ee',
    version: '0.0.1',
    integrity: 'sha512-BpplZkRavFN278eg1a+ZgpZHhOawObRRITzCTSEpUU4Qk3sGNTu+nqWUyBo7kvdVxk+3Mg5VQsTvFdhBwknvMA==',
    shasum: 'a9abe073171bc9e0b64358f821a92532306bc25e',
    dicMD5: '7b95b5586b031d7643d0dbc56c6e7838',
    affMD5: 'fee077bcac75b375aa6bb5b7839f0839'
  },
  'fa-ir': {
    language: DICT_LANGUAGE.FA_IR,
    packageName: 'hunspell-dict-fa-ir',
    version: '0.0.1',
    integrity: 'sha512-NxnwA5nNKaCk9Va3bE+rfh9NbVYqXYVK+N1qVcLOekQBZAxfYzxg6w4Y45ExDLIWq1kabp97fI6J+e6yKTv8Sw==',
    shasum: '336a42bbd31e2af48f2838e965d71e86c172f7a6',
    dicMD5: '1138a448bad5f7677b1fe461ed00480a',
    affMD5: '8de22a87459fd852c505c40fc043ed9e'
  },
  'fo-fo': {
    language: DICT_LANGUAGE.FO_FO,
    packageName: 'hunspell-dict-fo-fo',
    version: '0.0.1',
    integrity: 'sha512-E8Pkbb2qLHRFTZ2xpbpfG0wsaUK3qPEp2oJMSTMkk2YB+dhhSkYXr3WdJAr6RwYi0KHL6liw1w9THHFN9v6Y1g==',
    shasum: 'fd6d9e1add7f2ebda8bf8ac4dfe22c77487f3b23',
    dicMD5: '55c94ed87172a356ea25fba1f1029f94',
    affMD5: 'be65ebf1da937d8a8031d448ee087f87'
  },
  'fr-fr': {
    language: DICT_LANGUAGE.FR_FR,
    packageName: 'hunspell-dict-fr-fr',
    version: '0.0.1',
    integrity: 'sha512-DmU0jUZznfCskfMV2yD7YrWCkIlUUlpWnvAzgSWzDncebT3/Oj+JBG21osoqboqLd97JBgaRXgjHVO1LqbJlHQ==',
    shasum: 'ae1275d95c449f6b50a61d402a800793325a1b55',
    dicMD5: '32f33ac4e3a44d41f6c284c3d327d3ef',
    affMD5: 'fdf0fda98f3f911c7ad7b8a269fff10b'
  },
  'he-il': {
    language: DICT_LANGUAGE.HE_IL,
    packageName: 'hunspell-dict-he-il',
    version: '0.0.1',
    integrity: 'sha512-3f97Ri4HJ6zkGpzp21HYP52+D/AQKuSg87U0JMprlv/nWLi48r31IyxDHvViByfhsil9Vy7BhOB5oYRqPbXdgg==',
    shasum: 'aa882d02d0d2d92ae1bbfcfd379194e029f6a076',
    dicMD5: '12fa0053722614a21bcce67d5eead799',
    affMD5: 'bec58ce5c6c0b0c39a44a1fc9c4ab522'
  },
  'hr-hr': {
    language: DICT_LANGUAGE.HR_HR,
    packageName: 'hunspell-dict-hr-hr',
    version: '0.0.1',
    integrity: 'sha512-3C6wSTku3h7wdttyYL3VSX8LoapInJ7abshRdY8lojokFZLlkh2LlZ4NMXsh6NceHFz0DbmDg6jx1zU4g1uHgw==',
    shasum: '536a88f0454cb63acfb01cbbf79622cd341028d3',
    dicMD5: 'c31fc81ad491d3e531de1214f835a0fd',
    affMD5: 'ba571af2cd9fb9254fde55711efbefe3'
  },
  'hu-hu': {
    language: DICT_LANGUAGE.HU_HU,
    packageName: 'hunspell-dict-hu-hu',
    version: '0.0.1',
    integrity: 'sha512-sg0hNqSrLcLmJn3Lmx6QkhqFJ5hKhvlM9xR7urD/W3JnhdCCvG+r4fqqRPKx93j+aH4wASbA27kslNUVBWiNCw==',
    shasum: '592cce6ce438752f813acfcd4a4666a818303fe2',
    dicMD5: 'fb6f93a3a8e1b1f561e28e1390d9a98c',
    affMD5: 'a260b37a40f5667784a1ca2c44f650b7'
  },
  'it-it': {
    language: DICT_LANGUAGE.IT_IT,
    packageName: 'hunspell-dict-it-it',
    version: '0.0.1',
    integrity: 'sha512-fb5s/ECDceEjZ5UdlcSsPHQL8Tvit1yXRc1fpvnBOTRowL1Hdk32swcOGC2m7pxYtEItaDBUxveW2nfg7+fyoQ==',
    shasum: '71684f781d92d754ed57ed5eff50c7d9c6ce9d64',
    dicMD5: 'fddb8fff08a4c9f9ea531f1d4720252f',
    affMD5: 'f2d9df5c84af5d94df471ab144046add'
  },
  ko: {
    language: DICT_LANGUAGE.KO,
    packageName: 'hunspell-dict-ko',
    version: '0.0.1',
    integrity: 'sha512-HcRFCLcDMkVzPwki0WXsJLlBPnPPGK9dhryT6FZGGUC9EUee1CuJuZ1L/0sW3I/6agE4UxTdzt5ee94uVMY8Gg==',
    shasum: '6c76b3c99fd81c4ba70b0be4339a6a51355e7110',
    dicMD5: '1f68e4b476ca574014875474562d4b65',
    affMD5: '12080e5799de3b96738c5df0b48c72be'
  },
  'lt-lt': {
    language: DICT_LANGUAGE.LT_LT,
    packageName: 'hunspell-dict-lt-lt',
    version: '0.0.1',
    integrity: 'sha512-Y5mZaPvEERVOJLPtroph1MOzne0PyFge7zzjBd0PrJLGKvfxkUOH1uQdxydKRj2iA/jEKwpQd00q3unRPr0azw==',
    shasum: '6057413f4d9e8612abe9c38e0799ae34370ada91',
    dicMD5: 'dd2389c8c67a4477921a1341564d9e9b',
    affMD5: '583826dd8b85b0a71158c10634c532ae'
  },
  'lv-lv': {
    language: DICT_LANGUAGE.LV_LV,
    packageName: 'hunspell-dict-lv-lv',
    version: '0.0.1',
    integrity: 'sha512-ck4dgvkWxKcDVoVtsk0L9U3Am7TxRmbI8aKOlWbMQQDAWiNFe/dwby0RPhuIQ6xe5KDePrepCtJcuQ2wPx1wiA==',
    shasum: '54642054299ffc57ec1e176475e1cf53937e4f88',
    dicMD5: '4ac7de72dcc8ce69d6a3eebce8fc9e6e',
    affMD5: '3166a42b5663042726a00a0e54cb5a27'
  },
  'nb-no': {
    language: DICT_LANGUAGE.NB_NO,
    packageName: 'hunspell-dict-nb-no',
    version: '0.0.1',
    integrity: 'sha512-dt+klYmdGMY/xWrcCeR+98LU1mhD6ttgVWUQCwLMhz3t37HUDaMxtojGE7Gy7vGNghui86NjLVUdo59vbEEvxg==',
    shasum: '4ac2afc27ec4035c2f0b06bd1e1b5fb9dc621a9c',
    dicMD5: 'fba178582f47956d820a0a66bb1c799a',
    affMD5: '99df3013d7e46e70068c5607665395d3'
  },
  'nl-nl': {
    language: DICT_LANGUAGE.NL_NL,
    packageName: 'hunspell-dict-nl-nl',
    version: '0.0.1',
    integrity: 'sha512-N0VVJ5sCsFPRW14DqaxJPn1FrM6YihBrVBUj/bW4/LHO7zyU+RFK4mTWGscsTjnLlJDZ8v7GG4lrgOdCXM+pMQ==',
    shasum: '8b7d9d082f920f4539d597a087e33dcef33b8b00',
    dicMD5: '73a1de7e1f83ce6c8280a9152851d8eb',
    affMD5: '028ad724f26b6ac14333d88e6242ca1a'
  },
  'pl-pl': {
    language: DICT_LANGUAGE.PL_PL,
    packageName: 'hunspell-dict-pl-pl',
    version: '0.0.1',
    integrity: 'sha512-h758qbGlcdWhzwZAs1n1vv2iH+8IjRy/ty3ynDo3vRQhAp5QmBpqR3WEYyiW+9JXQmNsS3d1oNAzxXkvlUaLlg==',
    shasum: 'ae3f3d346b8abc538001d228fb308b6d486de7d5',
    dicMD5: '47a33427fefa219e8151ce145ba808dc',
    affMD5: '46a90e548c5fb0c2c75fdb832412029c'
  },
  'pt-br': {
    language: DICT_LANGUAGE.PT_BR,
    packageName: 'hunspell-dict-pt-br',
    version: '0.0.1',
    integrity: 'sha512-kOq1yb3QPC+/+nQnRJNHwTgABgCKgrY4lQtk0kzJ9h4aCoBWN4nCb90wCRSAAfiBio0M4JxLEAREntOIpDCSdw==',
    shasum: 'e988b52f3548182f9198c397da8e39680d4d4bd1',
    dicMD5: '2da9e25a143551e1b60185ecffab46d5',
    affMD5: 'aec614c406b1af50c4d792e3dcb7802e'
  },
  'pt-pt': {
    language: DICT_LANGUAGE.PT_PT,
    packageName: 'hunspell-dict-pt-pt',
    version: '0.0.1',
    integrity: 'sha512-fszCdWuJqCYwrOYfTE21wCuUJKzuNNwVxgef9ANskRPqFZCiluOCDEO61XCUvzmcdUvdzKFW9KBaRWm3lnB6Cw==',
    shasum: '647cffd19fbe0d2b7b91b310b15a243851ad7e9d',
    dicMD5: '97b11fe107d7c73da2df941abc662e59',
    affMD5: '5f6ac103ce45bc05679b45e5e13d3e9e'
  },
  'ro-ro': {
    language: DICT_LANGUAGE.RO_RO,
    packageName: 'hunspell-dict-ro-ro',
    version: '0.0.1',
    integrity: 'sha512-LGP01TsMdbD+2LyqTFT3pUrjUjt6s4uzrD6X8byQhFFpbf8uSG78ZgFvW4ihtf7zlTasmw/+YfPUw7r20DuoZw==',
    shasum: 'df3a378f0164932618d6b7f62987e52274cf8c1e',
    dicMD5: '437fa96c17edaa99b2331880cdda9719',
    affMD5: '645f78ee94b2bbc9a28684ae2636b83d'
  },
  'ru-ru': {
    language: DICT_LANGUAGE.RU_RU,
    packageName: 'hunspell-dict-ru-ru',
    version: '0.0.1',
    integrity: 'sha512-a1m1+BmCS5w3FhkAc4XllInxUfvFY7G70EyWebcbqNA/HfrrfFTCsM4+ZmNn6U4kw/2eVGQJbX6xrOzYzzUHDg==',
    shasum: 'ea744f5d8b335f964475fc2175d6a16b6a279c59',
    dicMD5: 'c63ec5a334809a750fc88ddb5f4c1551',
    affMD5: '9de38166917eabf9a68b633dcf0c4d0f'
  },
  'sk-sk': {
    language: DICT_LANGUAGE.SK_SK,
    packageName: 'hunspell-dict-sk-sk',
    version: '0.0.1',
    integrity: 'sha512-jVJPD+V5hf2OCDHsbSL8rHz4esi4ef2TX8K855i7ilv36c9PJI/W383SoIZp5Zu8CFWIUm3xwxDrbSMxhvZYOA==',
    shasum: '8005551056576fffc12dc6907a7e03974a468713',
    dicMD5: '70784f05fa2883f914c2b32f5e5847a5',
    affMD5: '4fa50a6112b2a14e28cbb18fe9d4d363'
  },
  'sl-si': {
    language: DICT_LANGUAGE.SL_SI,
    packageName: 'hunspell-dict-sl-si',
    version: '0.0.1',
    integrity: 'sha512-ahs8eeF+W0CtquBY8/2tRW2/YncVFxYe/ujpzAKx04ONjZWS7MM+Kr254AWnB0/aH9CxO5rqypRhWMAnq5TRtg==',
    shasum: 'facf5b875da2aac6cc5d7e014b5015d547e09a33',
    dicMD5: 'c2d7e2eed50bdf5ce864820eeecebbd3',
    affMD5: '0705eafb1587811c7d27e5bfd417a992'
  },
  sr: {
    language: DICT_LANGUAGE.SR,
    packageName: 'hunspell-dict-sr',
    version: '0.0.1',
    integrity: 'sha512-i2kDQa3W10NgnEVcWdjORhFj3fdK2MXzNPkCcNedMuMgXcwYt8sCfbTOqlu2OfjUSWorn9FBLTGTk3tk5O8bzw==',
    shasum: '270a2d48f197632bacaa16bae1c7ce4ed06b209d',
    dicMD5: 'c52d0593e02567e532b1ef153543b2d7',
    affMD5: 'b411e945b19eeaf4e5058954c85931ff'
  },
  'sr-latn': {
    language: DICT_LANGUAGE.SR_LATN,
    packageName: 'hunspell-dict-sr-latn',
    version: '0.0.1',
    integrity: 'sha512-tqmThb3h3tI42EGVvTWHqRhQP7d1dgpnl+sYRp1Kj3KGnTg8EV70gF2wgyChoVLb1+Ukusr5oG6sNwqsRG0C5g==',
    shasum: '26058ba555799bbdb78ed01863ef88de8cdecd46',
    dicMD5: '3a175631df2e3665dbf9f47a4d4721c7',
    affMD5: '48e090a18bdd73a4f95aa1d62fd07314'
  },
  'sv-se': {
    language: DICT_LANGUAGE.SV_SE,
    packageName: 'hunspell-dict-sv-se',
    version: '0.0.1',
    integrity: 'sha512-tILSwAIjUMXGDkct1ElkpKlveQnB1qEZmwHznP58eIAy0Sqqb5iD3XzlsVgVOi9vsQ0zN3//5iehpM7/AaV0HA==',
    shasum: 'bab10edd880486bb095c4e466c80dc5865d655db',
    dicMD5: '4cb9ab740b85dd90890828c16fc30d51',
    affMD5: 'f7887e3117f09f1fbc327631bdba8eab'
  },
  'ta-in': {
    language: DICT_LANGUAGE.TA_IN,
    packageName: 'hunspell-dict-ta-in',
    version: '0.0.1',
    integrity: 'sha512-Kgib7kIiVWJRaau5CoFuY6G1HdSE/H2O8+6W/dYPANm4svvJHCDmlzagw2Ifok6porxrDuyJ+dOZT0WIpQCjYg==',
    shasum: '61b5cc5187770154b19a50accc20905560cd5272',
    dicMD5: '2c24723fb6db36e573375b06f06c58ab',
    affMD5: '5725ad33d243d793acb45af90f7ccd66'
  },
  'tg-tg': {
    language: DICT_LANGUAGE.TG_TG,
    packageName: 'hunspell-dict-tg-tg',
    version: '0.0.1',
    integrity: 'sha512-bsu/40WNDb1i4k5jLxGQ7OkcVfBJ+/+gdw2rwJYeI3V5cG8X1K5n4VyDmKm1LlM4RX90XsdVY5JVf04vbm3yNA==',
    shasum: '05b8850d0ea533e4e6d6ca7ccad85a583e0c71da',
    dicMD5: '3fa524d8ea8e9254111a111b1c5e6f21',
    affMD5: '0dec71fcb1dc9bc60f67f9a1b0129dd0'
  },
  tr: {
    language: DICT_LANGUAGE.TR,
    packageName: 'hunspell-dict-tr',
    version: '0.0.1',
    integrity: 'sha512-MhdcUt09p4xwxSCU+MuMlq7yKWQEox9RQKABGkr6rRHGuyXZn8UeZ8diuqU2GR8qy7Gg3n2sgtoi1v701QkbuQ==',
    shasum: 'b0764428043c95b95390d291067543427be8ef8c',
    dicMD5: '810ec10f0e5fb34e663c594d566c2770',
    affMD5: 'b9135233d935b52203dc1247c4eaedef'
  },
  'uk-ua': {
    language: DICT_LANGUAGE.UK_UA,
    packageName: 'hunspell-dict-uk-ua',
    version: '0.0.1',
    integrity: 'sha512-GnW93X5Ygz84gKNusefhHTlMVXowC6PtaRtQNc3JHQSoQd2nA9BDH4ZcU4zvCzgGuMR01331bwf0b1Yo/i63yQ==',
    shasum: 'f2b4fd14d1f6f6b220c18cad403c72b1c03b36b6',
    dicMD5: 'b283b14868fd73b60da097802d9aa7ce',
    affMD5: '2e3fd74e3a08c7c6fbd00b0c196e8eee'
  },
  vi: {
    language: DICT_LANGUAGE.VI,
    packageName: 'hunspell-dict-vi',
    version: '0.0.1',
    integrity: 'sha512-/mmJQw+Trrk07tPChmk6t+BZVrv3gRoaDQtwn5UqMyYgSUsjZYOthtRu9YnQsR33v70Bj9vgC5jkk3f41wrNiQ==',
    shasum: '11990562798baebc9855d3a62464ff0d3536fe8b',
    dicMD5: '5cf11d16d81eeb17a761e90554852951',
    affMD5: 'fcad437d532a2978b5cd3f98bbfb2d42'
  }
};
export { DICT_LANGUAGE, DictionaryManifest, manifest };
