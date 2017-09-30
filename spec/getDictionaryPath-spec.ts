import { expect } from 'chai';
import * as path from 'path';
import { getDictionaryPath } from '../src/getDictionaryPath';
import { CODE_LANG_REGION } from '../src/manifest';

describe('getDictionaryPath', () => {
  it('should generate dictionary path', () => {
    const value = getDictionaryPath('./meh', CODE_LANG_REGION.KO);

    const installDirectory = path.join('./meh', CODE_LANG_REGION.KO);
    expect(value).to.deep.equal({
      installDirectory,
      dic: path.join(installDirectory, `${CODE_LANG_REGION.KO}.dic`),
      aff: path.join(installDirectory, `${CODE_LANG_REGION.KO}.aff`)
    });
  });
});
