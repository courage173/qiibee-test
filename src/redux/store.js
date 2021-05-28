import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();

const middleware = [epicMiddleware, thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);
epicMiddleware.run(rootEpic);
export { store };
