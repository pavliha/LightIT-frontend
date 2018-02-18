import {ADD_REVIEW, GET_REVIEWS} from "./reviews.action"

const initialState = {
  loading: false,
  error: null,
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
        errors: payload,
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
        errors: payload,
        loading: false
      }

    case ADD_REVIEW + "_FULFILLED":
      debugger
      state.reviews.push(payload)
      state.loading = false
      return state

    default: {
      return state;
    }
  }
};