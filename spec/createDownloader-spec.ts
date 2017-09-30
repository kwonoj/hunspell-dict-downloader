//tslint:disable:no-require-imports
import { expect } from 'chai';
import * as path from 'path';
import createDownloaderType = require('../src/createDownloader');
import { getDictionaryPath } from '../src/getDictionaryPath';
import { CODE_LANG_REGION } from '../src/manifest';

describe('createDownloader', () => {
  let createDownloader: typeof createDownloaderType.createDownloader;
  let initializeMock: jest.Mock<any>;

  beforeEach(() => {
    jest.mock('../src/initialize');
    jest.mock('fs-extra');
    jest.mock('pacote');
    jest.mock('../src/isInstalledDictionaryValid');

    initializeMock = require('../src/initialize').initialize;
    createDownloader = require('../src/createDownloader').createDownloader;
  });

  describe('initialize', () => {
    it('should initialize new directory', async () => {
      initializeMock.mockReturnValueOnce(Promise.resolve([]));
      const downloader = await createDownloader('/meh');

      expect(downloader.availableDictionaries).to.have.length.greaterThan(10);
      expect(downloader.installedDictionaries).to.be.empty;
      expect(downloader.dictionaryLocation).to.be.empty;
    });

    it('should load existing dictionary', async () => {
      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      const dict = downloader.dictionaryLocation[CODE_LANG_REGION.KO];
      expect(downloader.installedDictionaries).to.have.lengthOf(1);
      expect(dict).to.deep.equal(getDictionaryPath(path.resolve('/meh'), CODE_LANG_REGION.KO));
    });
  });

  describe('installDictionary', () => {
    it('should return if dictionary is already installed', async () => {
      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      const dict = await downloader.installDictionary(CODE_LANG_REGION.KO);
      expect(dict).to.deep.equal(getDictionaryPath(path.resolve('/meh'), CODE_LANG_REGION.KO));
    });

    it('should return in progress downloads', async () => {
      const extractMock = require('pacote').extract as jest.Mock<any>;
      extractMock.mockReturnValueOnce(
        new Promise(() => {
          /*noop*/
        })
      );

      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      downloader.installDictionary(CODE_LANG_REGION.BG_BG);
      downloader.installDictionary(CODE_LANG_REGION.BG_BG);

      expect(extractMock.mock.calls).to.have.lengthOf(1);
    });

    it('should install dictionary', async () => {
      const extractMock = require('pacote').extract as jest.Mock<any>;
      const validMock = require('../src/isInstalledDictionaryValid').isInstalledDictionaryValid as jest.Mock<any>;

      extractMock.mockReturnValueOnce(Promise.resolve('boo'));
      validMock.mockReturnValueOnce(Promise.resolve(true));

      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      const dict = await downloader.installDictionary(CODE_LANG_REGION.BG_BG);

      const expected = getDictionaryPath(path.resolve('/meh'), CODE_LANG_REGION.BG_BG);
      expect(dict).to.deep.equal({ dic: expected.dic, aff: expected.aff });
      expect(downloader.installedDictionaries).to.have.lengthOf(2);
      expect(downloader.dictionaryLocation[CODE_LANG_REGION.BG_BG]).to.exist;
    });

    it('should throw if installed dictionary is not valid', async () => {
      const extractMock = require('pacote').extract as jest.Mock<any>;
      const validMock = require('../src/isInstalledDictionaryValid').isInstalledDictionaryValid as jest.Mock<any>;
      const emptyDirMock = require('fs-extra').emptyDir as jest.Mock<any>;

      extractMock.mockReturnValueOnce(Promise.resolve('boo'));
      validMock.mockReturnValueOnce(Promise.resolve(false));
      emptyDirMock.mockReturnValueOnce(Promise.resolve());

      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      let thrown = false;
      try {
        await downloader.installDictionary(CODE_LANG_REGION.BG_BG);
      } catch (e) {
        thrown = true;
        expect(e).to.be.an('Error');
      }

      expect(emptyDirMock.mock.calls).to.have.lengthOf(1);
      expect(thrown).to.be.true;
    });

    it('should throw when installation fails', async () => {
      const extractMock = require('pacote').extract as jest.Mock<any>;
      extractMock.mockReturnValueOnce(Promise.reject('boo'));

      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      let thrown = false;
      try {
        await downloader.installDictionary(CODE_LANG_REGION.BG_BG);
      } catch (e) {
        thrown = true;
        expect(e).to.equal('boo');
      }
      expect(thrown).to.be.true;
    });
  });

  describe('uninstallDictionary', () => {
    it('should return when dictionary is not installed', async () => {
      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      expect(downloader.installedDictionaries).to.have.lengthOf(1);
      expect(downloader.dictionaryLocation[CODE_LANG_REGION.KO]).to.exist;

      await downloader.uninstallDictionary(CODE_LANG_REGION.BG_BG);

      expect(downloader.installedDictionaries).to.have.lengthOf(1);
      expect(downloader.dictionaryLocation[CODE_LANG_REGION.KO]).to.exist;
    });

    it('should clear installed dictionary directory', async () => {
      const emptyDirMock = require('fs-extra').emptyDir as jest.Mock<any>;
      emptyDirMock.mockReturnValueOnce(Promise.resolve());

      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      expect(downloader.installedDictionaries).to.have.lengthOf(1);
      expect(downloader.dictionaryLocation[CODE_LANG_REGION.KO]).to.exist;

      await downloader.uninstallDictionary(CODE_LANG_REGION.KO);
      expect(downloader.installedDictionaries).to.be.empty;
      expect(downloader.dictionaryLocation).to.be.empty;
    });

    it('should remove dictionary from list when fail to remove directory', async () => {
      const emptyDirMock = require('fs-extra').emptyDir as jest.Mock<any>;
      emptyDirMock.mockReturnValueOnce(Promise.reject('boo'));

      initializeMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.KO]));
      const downloader = await createDownloader('/meh');

      expect(downloader.installedDictionaries).to.have.lengthOf(1);
      expect(downloader.dictionaryLocation[CODE_LANG_REGION.KO]).to.exist;

      await downloader.uninstallDictionary(CODE_LANG_REGION.KO);
      expect(downloader.installedDictionaries).to.be.empty;
      expect(downloader.dictionaryLocation).to.be.empty;
    });
  });

  describe('clearCache', () => {
    it('should clear cache directory', async () => {
      initializeMock.mockReturnValueOnce(Promise.resolve([]));
      const emptyDirMock = require('fs-extra').emptyDir as jest.Mock<any>;
      emptyDirMock.mockReturnValueOnce(Promise.resolve());

      const downloader = await createDownloader('/meh');

      await downloader.clearCache();

      expect(emptyDirMock.mock.calls).to.have.lengthOf(1);
      expect(emptyDirMock.mock.calls[0][0]).to.include('.cache');
    });
  });
});
