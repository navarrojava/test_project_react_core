import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import ReducerCreator from '../reducers';

/* eslint-env browser*/
export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];


// TODO: Configure to use DevTools Extensions ...
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

class StoreCreator{

  static buildAppStore(...recucers){
    const rootReducer = ReducerCreator.buildAppReducer(...recucers);

    return createStore(
      rootReducer,
      initialState,
      composedEnhancers,
    );
  }
}

export default StoreCreator;
