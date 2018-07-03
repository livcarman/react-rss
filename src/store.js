/**
 * Utility function for configuring the redux store with middleware.
 */

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import history from './history';
import reducer from './reducer';
import saga from './saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  // Enable Redux dev tools browser extension if not in production
  const composeEnhancers =
    typeof window === 'object' &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

  const store = createStore(reducer, enhancer);

  // Run the saga(s)
  sagaMiddleware.run(saga);

  // Enable hot module replacement (HMR) for reducers
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default);
    });
  }

  return store;
}
