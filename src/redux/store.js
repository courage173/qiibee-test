import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers/rootReducer';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const logger = createLogger();

export const history = createBrowserHistory();

const middleware = [epicMiddleware, thunk, routerMiddleware(history), logger];
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);
epicMiddleware.run(rootEpic);
export { store };
