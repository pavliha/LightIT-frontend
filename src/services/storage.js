export const getUser = () => {
  return {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user')
  }
}

// export const setUser = (user) => {
//   localStorage.setItem("user", JSON.stringify(user))
// }
export const setUser = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  return "Bearer " + localStorage.getItem('token').replace(/^"(.*)"$/, '$1')
}