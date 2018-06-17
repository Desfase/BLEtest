import { createStore, applyMiddleware } from "redux";
import globalReducer from "./reducers";
import { initialState } from "./initialState";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer, autoRehydrate } from "redux-persist";

const needThisToDebugState =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// createStore (reductores,<estadoInicial>,<mejoras>)
export const store = createStore(
  globalReducer, // persostedReducer
  initialState,
  needThisToDebugState
);

/*export const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...needThisToDebugState), autoRehydrate())
);
*/
