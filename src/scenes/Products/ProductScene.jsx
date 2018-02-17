import React from "react";
import {connect} from "react-redux"
import {getProduct} from "./products.action"
import {Alert, Card, Col, Row, Spin} from "antd"
import {ASSETS_URL} from "../../services/api"
import Layout from "../../components/Layout/LayoutHOC"

@Layout
@connect(store => store.productsReducer)
export default class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProduct(this.props.match.params.id))
  }

  render() {
    const {loading, product, error} = this.props

    if (loading) return <Spin size="large"/>

    if (!loading && !product) return <Alert message={"Error displaying products: " + error} type="error"/>

    return <Card className='mt-3'
            title={product.title}>
        <Row>
          <Col span={6}>
            <img src={`${ASSETS_URL}/${product.img}`} width='100%'/>
          </Col>
          <Col span={18}>
            <div className='p-4'>
              {product.text}
            </div>
          </Col>
        </Row>
      </Card>

  }
}
