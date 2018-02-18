import {post} from "./index"
import * as Storage from "../storage"

export const register = async ({username, password}) => {

  const [err, response] = await post('/register/', {username, password})

  if (err) throw err.response.data
  if (!response.data.success) throw response.data.message

  Storage.setUser(response.data.token, username)


  return {
    user: username,
    token: response.data.token
  }
}

export const login = async ({username, password}) => {


  const [err, response] = await post('/login/', {username, password})

  if (err) throw err.response.data
  if (!response.data.success) throw response.data.message

  Storage.setUser(response.data.token, username)

  return {
    user: username,
    token: response.data.token
  }
}
