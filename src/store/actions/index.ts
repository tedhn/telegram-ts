export const UPDATE_MESSAGEHISTORY = "update_MESSAGEHISTORY";
export const CLEAR_MESSAGEHISTORY = "clear_MESSAGEHISTORY";
export const UPDATE_USER = "update_USER";
export const SELECT_CONTACT = "select_CONTACT";

export const updateMessageHistory = (text: string, user: string) => {
  return {
    type: UPDATE_MESSAGEHISTORY,
    payload: { text, user },
  };
};
export const clearMessageHistory = () => {
  return {
    type: CLEAR_MESSAGEHISTORY,
  };
};

export const updateUser = (username: string) => {
  return {
    type: UPDATE_USER,
    payload: { username },
  };
};

export const selectContact = (username: string) => {
  return {
    type: SELECT_CONTACT,
    payload: { selected: username },
  };
};
