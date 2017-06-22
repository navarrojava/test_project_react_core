(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './app-store'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./app-store'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.appStore);
    global.index = mod.exports;
  }
})(this, function (exports, _appStore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StoreCreator = undefined;

  var _appStore2 = _interopRequireDefault(_appStore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.StoreCreator = _appStore2.default;
});