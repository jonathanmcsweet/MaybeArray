import chai from 'chai';
import MaybeArray from '../src/main.js';
const expect = chai.expect;

describe('MaybeArray', () => {

  it('should return an array when given an array', () => {
    expect(MaybeArray([1,2,3]))
    .to.eql([1,2,3]);
  });

  it('should return a ShadowArray when given anything other than an array', () => {
    expect(MaybeArray(null))
    .to.have.property('error')
    .and.equal(null);

    expect(MaybeArray('blah'))
    .to.have.property('error')
    .and.equal('blah');

    expect(MaybeArray(undefined))
    .to.have.property('error')
    .and.equal(undefined);

    expect(MaybeArray(1))
    .to.have.property('error')
    .and.equal(1);

    expect(MaybeArray({}))
    .to.have.property('error')
    .and.eql({});
  });

  it('should have all the keys and methods that Array has', () => {
    expect(MaybeArray(null))
    .to.have.any.keys(...Object.getOwnPropertyNames(Array.prototype));
  });

});