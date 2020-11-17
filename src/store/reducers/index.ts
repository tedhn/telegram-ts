import { userReducer } from "./userReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { messageHistory } from "./messageReducer";

export const createReducer = () => {
  return combineReducers({ history: messageHistory, user: userReducer });
};
