const ShadowArray = function(x) {
  this.ARGUMENT = x;

  Object.getOwnPropertyNames(Array.prototype).forEach(prop => {
    const isFunc = typeof Array.prototype[prop] === 'function';
    isFunc && (this[prop] = f => this);
    !isFunc && (this[prop] = x);
  });

  return this;
}

const MaybeArray = maybeArr =>
                   Array.isArray(maybeArr) ? maybeArr : new ShadowArray(maybeArr);

export default MaybeArray;
