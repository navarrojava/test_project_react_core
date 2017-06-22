(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'redux', 'redux-thunk', '../reducers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('redux'), require('redux-thunk'), require('../reducers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.redux, global.reduxThunk, global.reducers);
    global.appStore = mod.exports;
  }
})(this, function (exports, _redux, _reduxThunk, _reducers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

  var _reducers2 = _interopRequireDefault(_reducers);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var StoreCreator = function () {

    /**
     *
     * @param { ReducersMapObject } reducers
     * @param { Middleware[]} middleware
     */
    function StoreCreator(reducers) {
      _classCallCheck(this, StoreCreator);

      this.reducers = reducers;

      for (var _len = arguments.length, middleware = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        middleware[_key - 1] = arguments[_key];
      }

      this.middlewares = [].concat(middleware);
    }

    /**
     *
     * @returns {Object} ReduxStore
     */


    _createClass(StoreCreator, [{
      key: 'buildAppStore',
      value: function buildAppStore() {
        var initialState = {};
        var enhancers = [];
        var rootReducer = new _reducers2.default(this.reducers).buildAppReducer();
        var middleware = [_reduxThunk2.default].concat(_toConsumableArray(this.middlewares));

        var composedEnhancers = _redux.compose.apply(undefined, [_redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware))].concat(enhancers));

        return (0, _redux.createStore)(rootReducer, initialState, composedEnhancers);
      }
    }]);

    return StoreCreator;
  }();

  exports.default = StoreCreator;
});