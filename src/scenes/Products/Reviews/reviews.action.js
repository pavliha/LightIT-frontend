import * as API from '../../../services/api'

export const GET_REVIEWS = 'GET_REVIEWS'
export const ADD_REVIEW = 'ADD_REVIEW'

export const getReviews = (product_id) => ({
  type: GET_REVIEWS,
  payload: API.reviews.forProduct(product_id),
})

export const addReview = (id, values) => async (dispatch) => {
  await dispatch(({
    type: ADD_REVIEW,
    payload: API.reviews.add(id, values),
  }))
  dispatch(getReviews(id))
}
