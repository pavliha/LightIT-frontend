import * as API from '../../services/api'
import * as Storage from '../../services/storage'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const register = values => ({
  type: REGISTER_USER,
  payload: API.auth.register(values),
})

export const login = values => !values ?
  ({
    type: LOGIN_USER + "_FULFILLED",
    payload: Storage.getUser()
  }) : ({
    type: LOGIN_USER,
    payload: API.auth.login(values),
  })

export const logout = () => {
  localStorage.clear()
  return {
    type: LOGOUT_USER,
  }
}
