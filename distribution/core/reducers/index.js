(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'redux', '../../core/home/reducer/home-reducer'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('redux'), require('../../core/home/reducer/home-reducer'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.redux, global.homeReducer);
    global.index = mod.exports;
  }
})(this, function (exports, _redux, _homeReducer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _homeReducer2 = _interopRequireDefault(_homeReducer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

  var ReducerCreator = function () {

    /**
     *
     * @param { ReducersMapObject }reducers
     */
    function ReducerCreator(reducers) {
      _classCallCheck(this, ReducerCreator);

      this.reducers = reducers;
    }

    /**
     *
     * @returns {Reducer<S>}
     */


    _createClass(ReducerCreator, [{
      key: 'buildAppReducer',
      value: function buildAppReducer() {
        var reducers = this.reducers;

        var rdxs = _extends({}, reducers, { home: _homeReducer2.default });
        return (0, _redux.combineReducers)(rdxs);
      }
    }]);

    return ReducerCreator;
  }();

  exports.default = ReducerCreator;
});