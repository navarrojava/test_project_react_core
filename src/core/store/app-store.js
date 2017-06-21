import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import  ReducerCreator from '../reducers';

/* eslint-env browser*/

class StoreCreator {

   buildAppStore(...reducers) {
    const initialState = {};
    const enhancers = [];

    const rootReducer = new ReducerCreator.buildAppReducer(...reducers);
    const middleware = [
      thunk,
      routerMiddleware(history),
    ];

    const composedEnhancers = compose(
      applyMiddleware(...middleware),
      ...enhancers,
    );


    return createStore(
      rootReducer,
      initialState,
      composedEnhancers,
    );
  }
}

export default StoreCreator;
