import { UPDATE_MESSAGEHISTORY, UPDATE_USER } from "./../store/actions/index";

export interface rootState {
  history: any;
  user: any;
}

export interface updateMessageHistory {
  type: typeof UPDATE_MESSAGEHISTORY;
  payload: { text: string; user: string };
}

export interface updateUser {
  type: typeof UPDATE_USER;
  payload: { username: string };
}

export type ACTIONS_TYPES = updateMessageHistory | updateUser;
