//tslint:disable:no-require-imports
import { expect } from 'chai';
import fsType = require('fs-extra');
import initializeType = require('../src/initialize');
import { CODE_LANG_REGION } from '../src/manifest';

describe('initialize', () => {
  let initialize: typeof initializeType.initialize;
  let fs: typeof fsType;

  beforeEach(() => {
    jest.mock('fs-extra');
    fs = require('fs-extra');
    jest.mock('../src/isInstalledDictionaryValid');

    initialize = require('../src/initialize').initialize;
  });

  it('should create directory', async () => {
    const ensureDirMock = fs.ensureDir as jest.Mock<any>;
    const readdirMock = fs.readdir as jest.Mock<any>;

    readdirMock.mockReturnValueOnce([]);

    await initialize('meh', []);

    expect(ensureDirMock.mock.calls).to.have.lengthOf(1);
    expect(ensureDirMock.mock.calls[0]).to.deep.equal(['meh']);
  });

  it('should generate existing valid dictionary list', async () => {
    const readdirMock = fs.readdir as jest.Mock<any>;
    const validationMock = require('../src/isInstalledDictionaryValid').isInstalledDictionaryValid as jest.Mock<any>;

    //readdir will return bg, ca, meh- exists
    readdirMock.mockReturnValueOnce(Promise.resolve([CODE_LANG_REGION.BG_BG, CODE_LANG_REGION.CA_ES, 'meh-dir']));
    validationMock.mockImplementation((_path: string, dict: string) =>
      Promise.resolve(dict !== CODE_LANG_REGION.BG_BG)
    );

    //picks up dir from 'available' manifest only (bg, ko, ca) then exclude non-valid (bg)
    const installed = await initialize('meh', [CODE_LANG_REGION.BG_BG, CODE_LANG_REGION.KO, CODE_LANG_REGION.CA_ES]);

    expect(installed).to.deep.equal([CODE_LANG_REGION.CA_ES]);
  });
});
