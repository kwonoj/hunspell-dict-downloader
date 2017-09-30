import { expect } from 'chai';
import { getLanguageRegionCode } from '../src/getLanguageRegionCode';
import { CODE_LANG, CODE_LANG_REGION } from '../src/manifest';

describe('getLanguageRegionCode', () => {
  it('should return lang_region code as is', () => {
    Object.keys(CODE_LANG_REGION).forEach(key => expect(getLanguageRegionCode(key as any)).to.equal(key));
  });

  it('should return lang_region code from lang code', () => {
    expect(getLanguageRegionCode(CODE_LANG.EN)).to.equal(CODE_LANG_REGION.EN_US);
  });
});
