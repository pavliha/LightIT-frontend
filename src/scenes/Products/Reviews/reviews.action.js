import * as API from '../../../services/api'

export const GET_REVIEWS = 'GET_REVIEWS'
export const ADD_REVIEW = 'ADD_REVIEW'

export const getReviews = (user_id) => ({
  type: GET_REVIEWS,
  payload: API.reviews.user(user_id),
})

export const addReview = (id, values) => ({
  type: ADD_REVIEW,
  payload: API.reviews.add(id,values),
})