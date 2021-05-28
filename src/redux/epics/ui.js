import { from, of } from "rxjs";
import {
  filter,
  switchMap,
  map,
  catchError,
  mergeMap,
  flatMap,
  mapTo,
} from "rxjs/operators";

import { ofType } from "redux-observable";
// import { Observable } from "rxjs";
import * as types from "../constants/ui";

// export const toggleForm = (action$) => {
//   console.log(action$);
//   action$.pipe(
//     ofType(types.TOGGLE_FORM),
//     switchMap(async (action) => {
//       return { payload: action.payload };
//     }),
//     map((action) => {
//       return { mess: action.payload };
//     }),
//     catchError((error) => {
//       return { message: error };
//     })
//   );
// };

export const toggleForm = (action$) =>
  action$.pipe(
    ofType(types.TOGGLE_SIDE_BAR),
    // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );

// export const toggleSidebar = (action$) => {
//   action$.pipe(ofType(types.TOGGLE_SIDE_BAR));
// };
