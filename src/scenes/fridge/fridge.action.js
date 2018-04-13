export const ADD_ITEM = '@fridge/ADD_ITEM'
export const INCREASE_ITEM_AMOUNT = '@fridge/INCREASE_ITEM_AMOUNT'

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
})

export const increaseItemAmount = (item, value) => ({
  type: INCREASE_ITEM_AMOUNT,
  payload: { item, value }
})

export const decreaseItemAmount = (item, value) => ({
  type: INCREASE_ITEM_AMOUNT,
  payload: { item, value }
})
