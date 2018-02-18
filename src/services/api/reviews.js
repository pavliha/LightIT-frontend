import {get, post} from "./index"

export const user = async (id) => {
  const [err, response] = await get('/reviews/' + id,)
  if (err) throw err.response.data

  return response.data
}

export const add = async ({id, rate, text}) => {
  const [err, response] = await post('/reviews/' + id, {rate, text})
  if (err) throw err.response.data

  return response.data
}