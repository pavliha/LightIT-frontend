import { ADD_ITEM, INCREASE_ITEM_AMOUNT } from "./fridge.action"

import { splice } from 'immutable-arrays'

const initialState = {
  items: [
    { name: "Cucumbers", amount: 2, date: new Date() },
    { name: "Salat", amount: 1, date: new Date() },
    { name: "Fish", amount: 1, date: new Date() },
    { name: "Pork", amount: 1, date: new Date() },
    { name: "Beef", amount: 1, date: new Date() },
  ]
  ,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_ITEM:
      return {
        ...state,
        items: push(state.items, payload),
      }

    case INCREASE_ITEM_AMOUNT:
      const { item } = payload
      const items = splice(state.items, state.items.findIndex((element) => element.name === item.name), 1, {
        ...item,
        amount: item.amount++
      })
      debugger
      return {
        ...state,
        items
      }

    default: {
      return state;
    }
  }
};
