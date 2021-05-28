import { combineEpics } from "redux-observable";
import { register, login } from "./user";

export const rootEpic = combineEpics(register, login);
