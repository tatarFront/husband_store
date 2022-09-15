import { combineReducers } from "redux";

import { settingsReducer } from "./slices/settings/slice";

const rootReducer = combineReducers({
  settings: settingsReducer
});

export default rootReducer;
