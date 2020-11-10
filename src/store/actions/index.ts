export const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessage = (text: string, user: string) => {
  return {
    type: SEND_MESSAGE,
    payload: { text, user },
  };
};
