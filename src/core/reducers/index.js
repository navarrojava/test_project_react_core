/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import { combineReducers } from 'redux';

export default class ReducerCreator {

   buildAppReducer(...reducers) {
    return combineReducers(
      ...reducers,
    );
  }
}
