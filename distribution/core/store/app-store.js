var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ReducerCreator from '../reducers';
/* eslint-env browser*/

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
      var rootReducer = new ReducerCreator(this.reducers).buildAppReducer();
      var middleware = [thunk].concat(_toConsumableArray(this.middlewares));

      var composedEnhancers = compose.apply(undefined, [applyMiddleware.apply(undefined, _toConsumableArray(middleware))].concat(enhancers));

      return createStore(rootReducer, initialState, composedEnhancers);
    }
  }]);

  return StoreCreator;
}();

export default StoreCreator;