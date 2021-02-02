import { UPDATE_USER, SELECT_CONTACT } from "./../actions/index";
import { ACTIONS_TYPES } from "../../types";

export const userReducer = (user = {}, action: ACTIONS_TYPES) => {
  switch (action.type) {
    case UPDATE_USER: {
      return action.payload;
    }
    case SELECT_CONTACT: {
      return action.payload;
    }

    default: {
      return user;
    }
  }
};
