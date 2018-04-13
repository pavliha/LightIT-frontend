import React from "react";
import PropTypes from 'prop-types'
import { Card } from 'antd'
import FridgeItem from './FridgeItem'
import { connect } from 'react-redux'
import { decreaseItemAmount, increaseItemAmount } from './fridge.action'

const Fridge = ({ items, decreaseItemAmount, increaseItemAmount }) =>
  <Card title="Fridge">
    <div>
      {items.map((item, key) =>
        <FridgeItem
          key={key}
          name={item.name}
          amount={item.amount}
          date={item.date}
          onIncrease={() => increaseItemAmount(item)}
          onDecrease={() => decreaseItemAmount(item)}/>
      )}
    </div>
  </Card>

Fridge.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(FridgeItem.propTypes)).isRequired,
}

const mapDispatchToProps = (dispatch) => ({

  decreaseItemAmount: (item) => {
    dispatch(decreaseItemAmount(item))
  },

  increaseItemAmount: (item) => {
    dispatch(increaseItemAmount(item))
  }

})

export default connect((store) => store.fridgeReducer, mapDispatchToProps)(Fridge)
