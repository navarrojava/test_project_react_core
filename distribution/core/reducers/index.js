var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import { combineReducers } from 'redux';

var ReducerCreator = function () {
  function ReducerCreator() {
    _classCallCheck(this, ReducerCreator);
  }

  _createClass(ReducerCreator, null, [{
    key: 'buildAppReducer',
    value: function buildAppReducer() {
      for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
        reducers[_key] = arguments[_key];
      }

      return combineReducers(_extends({}, reducers));
    }
  }]);

  return ReducerCreator;
}();

export default ReducerCreator;