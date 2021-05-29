import { combineEpics } from "redux-observable";
import { register, login, getUserDetails, redeem } from "./user";
import { tapAllActions } from "./allEpic";
import { getBrandDetail, follow } from "./brand";

export const rootEpic = combineEpics(
  register,
  login,
  getUserDetails,
  tapAllActions,
  getBrandDetail,
  follow,
  redeem
);
