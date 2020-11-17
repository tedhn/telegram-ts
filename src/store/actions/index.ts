export const UPDATE_MESSAGEHISTORY = "update_MESSAGEHISTORY";
export const UPDATE_USER = "update_USER";

export const updateMessageHistory = (text: string, user: string) => {
  return {
    type: UPDATE_MESSAGEHISTORY,
    payload: { text, user },
  };
};

export const updateUser = (username: string) => {
  return {
    type: UPDATE_USER,
    payload: { username },
  };
};
