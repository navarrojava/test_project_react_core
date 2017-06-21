/**
 * Created by NavarroFerreira on 6/20/2017.
 */
import { combineReducers } from 'redux';

export  class ReducerCreator {

  constructor(){

  }

   buildAppReducer(...reducers) {
    return combineReducers(
      ...reducers,
    );
  }
}
