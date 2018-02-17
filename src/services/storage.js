import JWT from "jwt-decode"

export const getUser = () => {
  return JWT(localStorage.getItem('token')).data
}

// export const setUser = (user) => {
//   localStorage.setItem("user", JSON.stringify(user))
// }
export const setToken = (token) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  return "Bearer " + localStorage.getItem('token').replace(/^"(.*)"$/, '$1')
}