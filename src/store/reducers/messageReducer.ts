import { SEND_MESSAGE } from "./../actions/index";
import { ACTIONS_TYPES } from "../../types";

export const messageHistory = (message = [], action: ACTIONS_TYPES) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return [...message, action.payload];
    }
    default: {
      return message;
    }
  }
};
