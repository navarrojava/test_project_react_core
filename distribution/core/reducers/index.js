var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import { combineReducers } from 'redux';

export default class ReducerCreator {
  static buildAppReducer(...reducers) {
    return combineReducers(_extends({}, reducers));
  }
}