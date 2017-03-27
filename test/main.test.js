import chai from 'chai';
import MaybeArray from '../src/main.js';

const expect = chai.expect;

describe('MaybeArray', () => {
  it('should return an array when given an array', () => {
    expect(MaybeArray([1,2,3]))
    .to.eql([1,2,3]);
  });

  it('should return a ShadowArray when given an array', () => {
    expect(MaybeArray(null))
    .to.eql({error: null});
  });

});