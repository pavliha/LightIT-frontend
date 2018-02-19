import {get, error} from "./index"

export const all = async () => {
  const [err, response] = await get('/products')
  if (err) throw error(err)

  return response.data
}

export const find = async (id) => {
  const [err, response] = await get('/products')
  if (err) throw error(err)

  return response.data.find((cargo) => cargo.id === parseInt(id))
}