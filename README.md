[![Build Status](https://travis-ci.org/kwonoj/hunspell-dict-downloader.svg?branch=feat-manifest)](https://travis-ci.org/kwonoj/hunspell-dict-downloader)
[![Build status](https://ci.appveyor.com/api/projects/status/irky36o731f40wek/branch/master?svg=true)](https://ci.appveyor.com/project/kwonoj/hunspell-dict-downloader/branch/master)
[![codecov](https://codecov.io/gh/kwonoj/hunspell-dict-downloader/branch/master/graph/badge.svg)](https://codecov.io/gh/kwonoj/hunspell-dict-downloader)
[![npm](https://img.shields.io/npm/v/hunspell-dict-downloader.svg)](https://www.npmjs.com/package/hunspell-dict-downloader)
[![node](https://img.shields.io/badge/node-=>4.0-blue.svg?style=flat)](https://www.npmjs.com/package/hunspell-dict-downloader)
[![CircleCI](https://circleci.com/gh/kwonoj/hunspell-dict-downloader.svg?style=svg)](https://circleci.com/gh/kwonoj/hunspell-dict-downloader)

# hunspell-dict-downloader

`hunspell-dict-downloader` provides interface to manage hunspell-based dictionaries via javascript on node.js. There are about [40 language dictionaries available](https://www.npmjs.com/~_ojkwon).

# Install

```sh
npm install hunspell-dict-downloader
```

# Usage

## Initialize location to manage dictionary

`createDownloader` interface provides way to initialize location to store dictionaries.

```typescript
createDownloader(installPath: string): Promise<HunspellDictDownloader>
```

If given path has previously installed dictionaries, it'll be loaded into `installedDictionaries`.

## Manage dictionaries

`HunspellDictDownloader` provides few interfaces to manage dictionaries.

```typescript
interface HunspellDictDownloader {
  /**
   * Returns array of available dictionary can be installed.
   */
  availableDictionaries: Readonly<Array<CODE_LANG_REGION>>;

  /**
   * Returns array of currently installed dictionary.
   */
  installedDictionaries: Readonly<Array<CODE_LANG_REGION>>;

  /**
   * Object maps language to dictionary location for installed dictionary.
   */
  dictionaryLocation: Readonly<{ [index in CODE_LANG_REGION]: { dic: string; aff: string } }>;

  /**
   * Returns mapped LANG_REGION code from LANG code
   */
  getLanguageRegionCode(code: CODE_LANG_REGION | CODE_LANG): CODE_LANG_REGION;

  /**
   * Download new dictionary and install it.
   * If dictionary package has been downloaded previously and if it's valid
   * it'll be installed without re downloading whole package.
   *
   * NOTE: It is not thread safety and multple attempt to download same
   * language does not gaurantee validaty of installed dictionary.
   *
   * @param {CODE_LANG_REGION | CODE_LANG} code
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

```

# Building / Testing

Few npm scripts are supported for build / test code.

- `build`: Transpiles code to ES5 commonjs to `dist`.
- `test`: Run unit tests.
- `manifest:generate`: Update dictionary manifest file.
- `manifest:validate`: Integration tests, actually download dictionary and verify installed correctly.
- `lint`: Run lint over all codebases
- `lint:staged`: Run lint only for staged changes. This'll be executed automatically with precommit hook.
- `commit`: Commit wizard to write commit message

# License

[MIT](https://github.com/kwonoj/hunspell-dict-downloader/blob/master/LICENSE)
