import { combineEpics } from "redux-observable";
import { register, login, getUserDetails } from "./user";
import { tapAllActions } from "./allEpic";
import { getBrandDetail, follow } from "./brand";

export const rootEpic = combineEpics(
  register,
  login,
  getUserDetails,
  tapAllActions,
  getBrandDetail,
  follow
);
