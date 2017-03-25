
const nullable = x => x != null ? x : ShadowArray(x);
const ShadowArray = arr =>
                    Object.getOwnPropertyNames(Array.prototype)
                    .reduce((prev, curr) => {

                      prev[curr] = fn => arr;
                      return prev;

                    }, {});

const ToArray = function(maybeArr) {
  try {
    const arr = Array.isArray(MaybeArray) ? [...maybeArr] : [...arguments];
    return arr;
  } catch (error) {
    return ShadowArray(error);
  }
}

const MaybeArray = maybeArr =>
                   nullable(maybeArr);

export default {
  MaybeArray,
  ToArray
};
