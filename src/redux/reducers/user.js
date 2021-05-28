import * as types from "../constants/user";
import { users, brands } from "../../utils/data";

const initialState = {
  register: {
    requesting: false,
    error: null,
    success: false,
  },
  login: {
    requesting: false,
    error: null,
    success: false,
  },
  getUser: {
    requesting: false,
    error: null,
    success: false,
  },
  user: {},
  brands: brands,
  users: users,
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
      return Object.assign({}, state, {
        register: {
          requesting: true,
          error: null,
          success: false,
        },
      });
    case types.REGISTER_USER_SUCCESS:
      return Object.assign({}, state, {
        register: {
          requesting: false,
          error: null,
          success: true,
        },
        user: action.payload,
      });
    case types.REGISTER_USER_FAILURE:
      return Object.assign({}, state, {
        register: {
          requesting: false,
          error: action.payload,
          success: false,
        },
      });
    case types.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        login: {
          requesting: true,
          error: null,
          success: false,
        },
      });
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        login: {
          requesting: false,
          error: action.payload,
          success: true,
        },
        user: action.payload,
      });
    case types.LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        login: {
          requesting: false,
          error: action.payload,
          success: false,
        },
      });
    case types.GET_USER_REQUEST:
      return Object.assign({}, state, {
        getUser: {
          requesting: true,
          error: null,
          success: false,
        },
      });
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        getUser: {
          requesting: false,
          error: null,
          success: true,
        },
        user: action.payload,
      });
    case types.GET_USER_FAILURE:
      return Object.assign({}, state, {
        getUser: {
          requesting: false,
          error: action.payload,
          success: false,
        },
      });
    default:
      return { ...state };
  }
};

export default user;
