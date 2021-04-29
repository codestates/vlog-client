import { combineReducers } from "redux";

import postReducer from "./postModule";

const rootReducer = combineReducers({
  postReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
