import React from "react";
import PropTypes from 'prop-types'
import moment from 'moment'

class FridgeItem extends React.Component {

  render() {
    const { amount, name, date, onIncrease, onDecrease } = this.props

    return (
      <div className='d-flex py-3'>

        <div className='px-3'>
          <div><i className="fa fa-plus-circle" onClick={onIncrease}/></div>
          <div><i className="fa fa-minus-circle" onClick={onDecrease}/></div>
        </div>

        <div>
          <div>{amount > 1 ? `(${amount}x)` : null} {name}</div>
          <small>{moment(date).fromNow()}</small>
        </div>

      </div>
    );

  }
}

FridgeItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
}

export default FridgeItem
