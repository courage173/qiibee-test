import { history } from "../store";
import { switchMap, map, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import * as types from "../constants/user";
import {
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
  getUserFailure,
  getUserSuccess,
  redeemPointSuccess,
  redeemPointFailure,
} from "../actions/user";
import { loginUser, registerUser, getUser, redeemLoyalty } from "../request";

export const register = (action$, store) => {
  const users = store.value.user.users;
  const brands = store.value.brand.brands;
  return action$.pipe(
    ofType(types.REGISTER_USER_REQUEST),
    switchMap(async (action) => {
      const user = await registerUser(action.payload, users, brands);

      return { payload: user };
    }),
    map((action) => {
      if (action.payload.error) {
        return registerUserFailure(action.payload);
      }
      const user = action.payload;
      user.auth = true;
      localStorage.setItem(user.role, JSON.stringify(user));
      localStorage.setItem("lastUser", user.role);
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
  const brands = store.value.brand.brands;
  return action$.pipe(
    ofType(types.LOGIN_USER_REQUEST),
    mergeMap(async (action) => {
      const user = await loginUser(action.payload, users, brands);
      return { payload: user };
    }),
    map((action) => {
      if (action.payload.error) {
        return loginUserFailure(action.payload);
      }
      const user = action.payload;
      user.auth = true;
      localStorage.setItem(user.role, JSON.stringify(user));
      localStorage.setItem("lastUser", user.role);
      history.push("/dashboard");
      return loginUserSuccess(action.payload);
    }),
    catchError((error) => {
      return loginUserFailure(error.message);
    })
  );
};

export const getUserDetails = (action$) => {
  return action$.pipe(
    ofType(types.GET_USER_REQUEST),
    mergeMap(async (action) => {
      const user = await getUser(action.payload);
      return { payload: user };
    }),
    map((action) => {
      if (action.payload.error) {
        return getUserFailure(action.payload);
      }
      return getUserSuccess(action.payload);
    }),
    catchError((error) => {
      return getUserFailure(error.message);
    })
  );
};

export const redeem = (action$) => {
  return action$.pipe(
    ofType(types.REDEEM_LOYALTY_REQUEST),
    mergeMap(async (action) => {
      const user = await redeemLoyalty(action.payload);
      return { payload: user };
    }),
    map((action) => {
      if (action.payload.error) {
        return redeemPointFailure(action.payload);
      }
      return redeemPointSuccess(action.payload);
    }),
    catchError((error) => {
      return redeemPointFailure(error.message);
    })
  );
};
