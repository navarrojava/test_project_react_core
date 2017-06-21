var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReducerCreator from '../reducers';

/* eslint-env browser*/

var StoreCreator = function () {
  function StoreCreator() {
    _classCallCheck(this, StoreCreator);
  }

  _createClass(StoreCreator, [{
    key: 'buildAppStore',
    value: function buildAppStore() {
      var initialState = {};
      var enhancers = [];

      for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
        reducers[_key] = arguments[_key];
      }

      var rootReducer = new (Function.prototype.bind.apply(ReducerCreator.buildAppReducer, [null].concat(reducers)))();
      var middleware = [thunk, routerMiddleware(history)];

      var composedEnhancers = compose.apply(undefined, [applyMiddleware.apply(undefined, middleware)].concat(enhancers));

      return createStore(rootReducer, initialState, composedEnhancers);
    }
  }]);

  return StoreCreator;
}();

export default StoreCreator;