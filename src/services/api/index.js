import axios from 'axios'
import to from '../to'
import {getToken} from "../storage"
import * as auth from "./auth"
import * as products from "./products"
import * as reviews from './reviews'
export const ASSETS_URL = 'http://smktesting.herokuapp.com/static'
export const API_URL = 'http://smktesting.herokuapp.com/api'


if (getToken()) axios.defaults.headers.common['Authorization'] = getToken()

export const get = async (url) => await to(axios.get(API_URL + url))
export const post = async (url, data) => await to(axios.post(API_URL + url, data))
//export const put = async (url, data) => await to(axios.put(API_URL + url, data))


export {
  auth,
  products,
  reviews,
}