(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './core/home/actions/home-actions', './core/home/actions/home-action-types', './core/reducers', './core/store', './core/home/client/home-client'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./core/home/actions/home-actions'), require('./core/home/actions/home-action-types'), require('./core/reducers'), require('./core/store'), require('./core/home/client/home-client'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.homeActions, global.homeActionTypes, global.reducers, global.store, global.homeClient);
    global.index = mod.exports;
  }
})(this, function (exports, _homeActions, _homeActionTypes, _reducers, _store, _homeClient2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.homeClient = exports.StoreCreator = exports.ReducerCreator = undefined;
  Object.keys(_homeActions).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _homeActions[key];
      }
    });
  });
  Object.keys(_homeActionTypes).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _homeActionTypes[key];
      }
    });
  });

  var _reducers2 = _interopRequireDefault(_reducers);

  var _store2 = _interopRequireDefault(_store);

  var _homeClient3 = _interopRequireDefault(_homeClient2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.ReducerCreator = _reducers2.default;
  exports.StoreCreator = _store2.default;
  exports.homeClient = _homeClient3.default;
});