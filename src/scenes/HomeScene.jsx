import React, { Component } from 'react'
import { Col, Row } from 'antd'
import Fridge from './fridge/Fridge'

class HomeScene extends Component {

  render() {
    return <Row>
      <Col xs={12}>
        <Fridge/>
      </Col>
    </Row>
  }

}

export default HomeScene
