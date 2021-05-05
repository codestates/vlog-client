import { combineReducers } from "redux";

import mainPageReducer from "./mainPageModule";
import newPostReducer from "./newPostModule";
import myPageReducer from "./myPageModule";
import editReducer from "./EditPostModule"

const rootReducer = combineReducers({
  newPostReducer,
  mainPageReducer,
  myPageReducer,
  editReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
