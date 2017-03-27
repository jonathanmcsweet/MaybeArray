(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MaybeArray = factory());
}(this, (function () { 'use strict';

var ShadowArray = function ShadowArray(x) {
  var _this = this;

  this.error = x;

  Object.getOwnPropertyNames(Array.prototype).forEach(function (prop) {
    var isFunc = typeof Array.prototype[prop] === 'function';
    isFunc && (_this[prop] = function (f) {
      return _this;
    });
    !isFunc && (_this[prop] = x);
  });

  return this;
};

var MaybeArray = function MaybeArray(maybeArr) {
  return Array.isArray(maybeArr) ? maybeArr : new ShadowArray(maybeArr);
};

var main = {
  MaybeArray: MaybeArray
};

return main;

})));
//# sourceMappingURL=main.js.map
