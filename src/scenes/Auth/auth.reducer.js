import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "./auth.action";

const initialState = {
  loading: false,
  error: null,
  token: null,
  user: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTER_USER + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case REGISTER_USER + "_FULFILLED":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loading: false
      }

    case REGISTER_USER + "_REJECTED":
      return {
        ...state,
        error: payload,
        loading: false
      }

    case LOGIN_USER + "_FULFILLED":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loading: false
      }

    case LOGIN_USER + "_REJECTED":
      return {
        ...state,
        error: payload,
        loading: false
      }
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        user: null,

      }

    default: {
      return state;
    }
  }
};