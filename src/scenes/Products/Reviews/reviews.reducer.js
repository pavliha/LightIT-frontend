import {ADD_REVIEW, GET_REVIEWS} from "./reviews.action"

const initialState = {
  loading: false,
  error: null,
  addError: null,

  reviews: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_REVIEWS + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_REVIEWS + "_FULFILLED":
      return {
        ...state,
        reviews: payload,
        loading: false
      }

    case GET_REVIEWS + "_REJECTED":
      return {
        ...state,
        error: payload,
        loading: false
      }

    case ADD_REVIEW + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case ADD_REVIEW + "_REJECTED":
      return {
        ...state,
        addError: payload,
        loading: false
      }

    case ADD_REVIEW + "_FULFILLED":
      state.loading = false
      return state

    default: {
      return state;
    }
  }
};