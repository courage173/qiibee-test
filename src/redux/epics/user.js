//import { from, of, Observable } from "rxjs";
import { history } from "../store";
import {
  // filter,
  switchMap,
  map,
  catchError,
  mergeMap,
  mapTo,
  // mergeMap,
  // flatMap,
  // merge,
} from "rxjs/operators";
import { ofType } from "redux-observable";
import * as types from "../constants/user";
import {
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
} from "../actions/user";
import { loginUser, registerUser } from "../request";

export const register = (action$, store) => {
  const users = store.value.user.users;
  return action$.pipe(
    ofType(types.REGISTER_USER_REQUEST),
    switchMap(async (action) => {
      const user = await registerUser(action.payload, users);

      return { payload: user };
    }),
    map((action) => {
      if (action.payload.error) {
        return registerUserFailure(action.payload);
      }
      localStorage.setItem(action.payload.role, JSON.stringify(action.payload));
      history.push("/dashboard");
      return registerUserSuccess(action.payload);
    }),
    catchError((error) => {
      return registerUserFailure(error.message);
    })
  );
};

export const login = (action$, store) => {
  const users = store.value.user.users;
  return action$.pipe(
    ofType(types.LOGIN_USER_REQUEST),
    mergeMap(async (action) => {
      const user = await loginUser(action.payload, users);
      return { payload: user };
    }),
    map((action) => {
      if (action.payload.error) {
        return loginUserFailure(action.payload);
      }
      localStorage.setItem(action.payload.role, JSON.stringify(action.payload));
      history.push("/dashboard");
      return loginUserSuccess(action.payload);
    }),
    catchError((error) => {
      return loginUserFailure(error.message);
    })
  );
};
