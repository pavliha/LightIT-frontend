import {get, error, post} from "./index"

export const user = async (id) => {
  const [err, response] = await get('/reviews/' + id,)
  if (err) throw error(err)

  return response.data
}

export const add = async (id, {rate, text}) => {
  const [err, response] = await post('/reviews/' + id, {rate, text})
  if (err) throw error(err)
  return {}
}