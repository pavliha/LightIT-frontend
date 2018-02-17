import {GET_PRODUCTS} from "./products.action"

const initialState = {
  loading: false,
  errors: [],
  products: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_PRODUCTS + "_FULFILLED":
      return {
        ...state,
        products: payload,
        loading: false
      }

    case GET_PRODUCTS + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }
    default: {
      return state;
    }
  }
};