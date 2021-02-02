import {
  UPDATE_MESSAGEHISTORY,
  CLEAR_MESSAGEHISTORY,
} from "./../actions/index";
import { ACTIONS_TYPES } from "../../types";

export const messageHistory = (message = [], action: ACTIONS_TYPES) => {
  switch (action.type) {
    case UPDATE_MESSAGEHISTORY: {
      return [...message, action.payload];
    }
    case CLEAR_MESSAGEHISTORY: {
      return [];
    }
    default: {
      return message;
    }
  }
};
