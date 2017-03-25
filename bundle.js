'use strict';

const ShadowArray = function(x) {
  this.error = x;
  
  Object.getOwnPropertyNames(Array.prototype).forEach(prop => {
    const isFunc = typeof Array.prototype[prop] === 'function';
    isFunc && (this[prop] = f => this);
    !isFunc && (this[prop] = x);
  });

  return this;
};

const MaybeArray = maybeArr =>
                   Array.isArray(maybeArr) ? maybeArr : new ShadowArray(maybeArr);

var main = {
  MaybeArray
};

module.exports = main;
