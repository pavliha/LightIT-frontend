import * as API from '../../services/api'

export const GET_PRODUCTS = 'GET_PRODUCTS'

export const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: API.getProducts(),
})