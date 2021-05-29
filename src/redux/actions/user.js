import * as types from "../constants/user";
//register user
export const registerUser = (data) => ({
  type: types.REGISTER_USER_REQUEST,
  payload: data,
});

export const registerUserSuccess = (payload) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (message) => ({
  type: types.REGISTER_USER_FAILURE,
  payload: message,
});

//login user
export const loginUser = (data) => ({
  type: types.LOGIN_USER_REQUEST,
  payload: data,
});

export const loginUserSuccess = (payload) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload,
  };
};

export const loginUserFailure = (message) => ({
  type: types.LOGIN_USER_FAILURE,
  payload: message,
});

//get user
export const getUser = () => ({
  type: types.GET_USER_REQUEST,
});

export const getUserSuccess = (payload) => ({
  type: types.GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (message) => ({
  type: types.GET_USER_FAILURE,
  payload: message,
});

//redeem loyalty point
export const redeemPoint = (point) => ({
  type: types.REDEEM_LOYALTY_REQUEST,
  payload: point,
});

export const redeemPointSuccess = (payload) => ({
  type: types.REDEEM_LOYALTY_SUCCESS,
  payload,
});

export const redeemPointFailure = (message) => ({
  type: types.REDEEM_LOYALTY_FAILURE,
  payload: message,
});
