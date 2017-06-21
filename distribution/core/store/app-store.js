var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import ReducerCreator from '../reducers';

/* eslint-env browser*/
export var history = createHistory();

var initialState = {};
var enhancers = [];
var middleware = [thunk, routerMiddleware(history)];

// TODO: Configure to use DevTools Extensions ...
if (process.env.NODE_ENV === 'development') {
  var devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

var composedEnhancers = compose.apply(undefined, [applyMiddleware.apply(undefined, middleware)].concat(enhancers));

var StoreCreator = function () {
  function StoreCreator() {
    _classCallCheck(this, StoreCreator);
  }

  _createClass(StoreCreator, null, [{
    key: 'buildAppStore',
    value: function buildAppStore() {
      var rootReducer = ReducerCreator.buildAppReducer.apply(ReducerCreator, arguments);

      return createStore(rootReducer, initialState, composedEnhancers);
    }
  }]);

  return StoreCreator;
}();

export default StoreCreator;