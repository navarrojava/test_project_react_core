var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import { combineReducers } from 'redux';
import home from '../../core/home/reducer/home-reducer';

export default class ReducerCreator {

  /**
   *
   * @param { ReducersMapObject }reducers
   */
  constructor(reducers) {
    this.reducers = reducers;
  }

  /**
   *
   * @returns {Reducer<S>}
   */
  buildAppReducer() {
    const { reducers } = this;
    const rdxs = _extends({}, reducers, { home });
    return combineReducers(rdxs);
  }
}