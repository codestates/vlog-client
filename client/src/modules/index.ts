import { combineReducers } from "redux";

import postReducer from "./postModule";
import newPostReducer from "./newPostModule";
import myPageReducer from "./myPageModule"


const rootReducer = combineReducers({
  
  newPostReducer,
  postReducer,
  myPageReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
