import { combineReducers } from "redux";
import ui from "./ui";
import user from "./user";

const rootReducer = combineReducers({
  ui,
  user,
});

export default rootReducer;
