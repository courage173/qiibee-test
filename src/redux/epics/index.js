import { combineEpics } from "redux-observable";
import { register, login, getUserDetails } from "./user";
import { tapAllActions } from "./allEpic";

export const rootEpic = combineEpics(
  register,
  login,
  getUserDetails,
  tapAllActions
);
