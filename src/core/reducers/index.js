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
    const rdxs = { ...reducers, home };
    return combineReducers(
      rdxs,
    );
  }
}
