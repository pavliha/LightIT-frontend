import {GET_PRODUCT, GET_PRODUCTS} from "./products.action"

const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
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


    case GET_PRODUCT + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_PRODUCT + "_FULFILLED":
      return {
        ...state,
        product: payload,
        loading: false
      }

    case GET_PRODUCT + "_REJECTED":
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: {
      return state;
    }
  }
};