var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import { combineReducers } from 'redux';
import home from '../../core/home/reducer/home-reducer';

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

      var rdxs = _extends({}, reducers, { home: home });
      return combineReducers(rdxs);
    }
  }]);

  return ReducerCreator;
}();

export default ReducerCreator;