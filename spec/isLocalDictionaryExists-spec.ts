//tslint:disable:no-require-imports
import { expect } from 'chai';
import fsType = require('fs-extra');
import isLocalDictionaryExistsType = require('../src/isLocalDictionaryExists');
import { CODE_LANG_REGION } from '../src/manifest';

describe('initialize', () => {
  let fs: typeof fsType, isLocalDictionaryExists: typeof isLocalDictionaryExistsType.isLocalDictionaryExists;

  beforeEach(() => {
    jest.mock('fs-extra');
    fs = require('fs-extra');

    isLocalDictionaryExists = require('../src/isLocalDictionaryExists').isLocalDictionaryExists;
  });

  it('should return false if dictionary directory does not exist', async () => {
    const pathMock = fs.pathExists as jest.Mock<any>;
    pathMock.mockReturnValueOnce(Promise.resolve(false));

    const exists = await isLocalDictionaryExists('boo', CODE_LANG_REGION.BG_BG);
    expect(exists).to.be.false;
  });

  it('should return false if dic file does not exist', async () => {
    const pathMock = fs.pathExists as jest.Mock<any>;
    const statMock = fs.stat as jest.Mock<any>;
    pathMock.mockReturnValueOnce(Promise.resolve(true));
    statMock.mockReturnValueOnce(Promise.reject({ code: 'ENOENT' }));

    const exists = await isLocalDictionaryExists('boo', CODE_LANG_REGION.BG_BG);
    expect(exists).to.be.false;
  });

  it('should return false if aff file does not exist', async () => {
    const pathMock = fs.pathExists as jest.Mock<any>;
    const statMock = fs.stat as jest.Mock<any>;
    pathMock.mockReturnValueOnce(Promise.resolve(true));
    statMock.mockImplementation(
      (p: string) => (p.includes('.aff') ? Promise.reject({ code: 'ENOENT' }) : Promise.resolve({}))
    );

    const exists = await isLocalDictionaryExists('boo', CODE_LANG_REGION.BG_BG);
    expect(exists).to.be.false;
  });

  it('should return false if dic is not file', async () => {
    const pathMock = fs.pathExists as jest.Mock<any>;
    const statMock = fs.stat as jest.Mock<any>;
    pathMock.mockReturnValueOnce(Promise.resolve(true));
    statMock.mockReturnValue(Promise.resolve({ isFile: () => false }));

    const exists = await isLocalDictionaryExists('boo', CODE_LANG_REGION.BG_BG);
    expect(exists).to.be.false;
  });

  it('should return false if aff is not file', async () => {
    const pathMock = fs.pathExists as jest.Mock<any>;
    const statMock = fs.stat as jest.Mock<any>;
    pathMock.mockReturnValueOnce(Promise.resolve(true));
    statMock.mockImplementation((p: string) => Promise.resolve({ isFile: () => p.includes('.dic') }));

    const exists = await isLocalDictionaryExists('boo', CODE_LANG_REGION.BG_BG);
    expect(exists).to.be.false;
  });

  it('should return false when exception thrown', async () => {
    const pathMock = fs.pathExists as jest.Mock<any>;
    pathMock.mockReturnValueOnce(Promise.reject('meh'));

    const exists = await isLocalDictionaryExists('boo', CODE_LANG_REGION.BG_BG);
    expect(exists).to.be.false;
  });
});
