import { combineReducers } from "redux";

import postReducer from "./postModule";
import newPostReducer from "./newPostModule";

const rootReducer = combineReducers({
  
  newPostReducer,
  postReducer

});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
