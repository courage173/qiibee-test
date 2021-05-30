import { history } from "../store";
import { toast } from "react-toastify";
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
  rewardPointSuccess,
  rewardPointFailure,
} from "../actions/user";
import {
  loginUser,
  registerUser,
  getUser,
  redeemLoyalty,
  rewardLoyalty,
} from "../request";

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
        toast.error(action.payload.message);
        return registerUserFailure(action.payload);
      }
      const user = action.payload;
      user.auth = true;
      //remove the previous user image to save memory
      const prevUser = JSON.parse(localStorage.getItem(user.role));
      if (prevUser && prevUser.image) {
        URL.revokeObjectURL(prevUser.image);
      }
      localStorage.setItem(user.role, JSON.stringify(user));
      localStorage.setItem("lastUser", user.role);
      history.push("/dashboard");
      toast.success("signup successful");
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
        toast.error(action.payload.message);
        return loginUserFailure(action.payload);
      }
      const user = action.payload;
      user.auth = true;
      localStorage.setItem(user.role, JSON.stringify(user));
      localStorage.setItem("lastUser", user.role);
      history.push("/dashboard");
      toast.success("login successful");
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
        toast.error(action.payload.message);
        return redeemPointFailure(action.payload);
      }
      toast.success("redeem succesfully");
      return redeemPointSuccess(action.payload);
    }),
    catchError((error) => {
      return redeemPointFailure(error.message);
    })
  );
};

export const reward = (action$, store) => {
  const users = store.value.user.users;
  const userIds = store.value.ui;
  return action$.pipe(
    ofType(types.REWARD_LOYALTY_REQUEST),
    mergeMap(async (action) => {
      const userList = await rewardLoyalty(action.payload, users, userIds);
      return { payload: userList };
    }),
    map((action) => {
      if (action.payload.error) {
        toast.error(action.payload.message);
        return rewardPointFailure(action.payload);
      }
      toast.success("rewarded users succesfully");
      return rewardPointSuccess(action.payload);
    }),
    catchError((error) => {
      return rewardPointFailure(error.message);
    })
  );
};
