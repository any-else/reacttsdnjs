// root reducer

import { combineReducers } from "@reduxjs/toolkit";
import todoReducers from "./todoSlice";

const rootReducer = combineReducers({
  todoReducer: todoReducers,
});

export default rootReducer;
