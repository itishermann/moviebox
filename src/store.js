import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isProdEnv = process.env.NODE_ENV === "production";

let middleware = [thunk];
if (!isProdEnv) {
  const logger = require("redux-logger").default;
  middleware = [...middleware, logger];
}

const composeEnhancers = isProdEnv
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

export const persistor = persistStore(store);
