import { expect } from 'chai';
import * as idx from '../src/index';

describe('index', () => {
  it('should export', () => {
    expect(idx.CODE_LANG).to.exist;
    expect(idx.CODE_LANG_REGION).to.exist;
    expect(idx.createDownloader).to.exist;
  });
});
