import { SEND_MESSAGE, sendMessage } from "./../store/actions/index";

export interface rootState {
  history: any;
}

export interface sendMessage {
  type: typeof SEND_MESSAGE;
  payload: { text: string; user: string };
}

export type ACTIONS_TYPES = sendMessage;
