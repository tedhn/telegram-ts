import {
  UPDATE_MESSAGEHISTORY,
  UPDATE_USER,
  SELECT_CONTACT,
  CLEAR_MESSAGEHISTORY,
} from "./../store/actions/index";

export interface rootState {
  history: any;
  user: any;
}

export interface updateMessageHistory {
  type: typeof UPDATE_MESSAGEHISTORY;
  payload: { text: string; user: string };
}
export interface clearMessageHistory {
  type: typeof CLEAR_MESSAGEHISTORY;
}

export interface updateUser {
  type: typeof UPDATE_USER;
  payload: { username: string };
}
export interface selectContact {
  type: typeof SELECT_CONTACT;
  payload: { selected: string };
}

export type ACTIONS_TYPES =
  | updateMessageHistory
  | clearMessageHistory
  | updateUser
  | selectContact;
