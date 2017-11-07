//tslint:disable:no-require-imports
import { expect } from 'chai';
import isInstalledDictionaryValidType = require('../src/isInstalledDictionaryValid');
import { CODE_LANG_REGION } from '../src/manifest';

describe('isInstalledDictionaryValid', () => {
  let isInstalledDictionaryValid: typeof isInstalledDictionaryValidType.isInstalledDictionaryValid;
  let dirMock: jest.Mock<any>;

  beforeEach(() => {
    jest.mock('../src/isLocalDictionaryExists');
    jest.mock('../src/util/getFileHash');

    dirMock = require('../src/isLocalDictionaryExists').isLocalDictionaryExists as jest.Mock<any>;
    isInstalledDictionaryValid = require('../src/isInstalledDictionaryValid').isInstalledDictionaryValid;
  });

  it('should return false if dictionary not installed', async () => {
    dirMock.mockReturnValueOnce(Promise.resolve(false));

    const valid = await isInstalledDictionaryValid('boo', CODE_LANG_REGION.KO);
    expect(valid).to.be.false;
  });

  it('should return false if dic checksum does not match', async () => {
    dirMock.mockReturnValueOnce(Promise.resolve(true));
    (require('../src/util/getFileHash').getFileHash as jest.Mock<any>).mockReturnValueOnce('boo');

    const valid = await isInstalledDictionaryValid('boo', CODE_LANG_REGION.KO);
    expect(valid).to.be.false;
  });

  it('should return false if aff checksum does not match', async () => {
    dirMock.mockReturnValueOnce(Promise.resolve(true));
    (require('../src/util/getFileHash').getFileHash as jest.Mock<any>).mockImplementation(
      (d: string) => (d.includes('.dic') ? '58ab72addba0b22ae908176970c01bc4' : 'boo')
    );

    const valid = await isInstalledDictionaryValid('boo', CODE_LANG_REGION.KO);
    expect(valid).to.be.false;
  });

  it('should return false if reading checksum failure', async () => {
    dirMock.mockReturnValueOnce(Promise.resolve(true));
    (require('../src/util/getFileHash').getFileHash as jest.Mock<any>).mockReturnValueOnce(Promise.reject('meh'));

    const valid = await isInstalledDictionaryValid('boo', CODE_LANG_REGION.KO);
    expect(valid).to.be.false;
  });
});
