import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReducerCreator from '../reducers';

/* eslint-env browser*/

// TODO: Configure to use DevTools Extensions ...
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

class StoreCreator{

  static buildAppStore(...recucers){
    const initialState = {};
    const enhancers = [];

    const rootReducer = ReducerCreator.buildAppReducer(...recucers);
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
