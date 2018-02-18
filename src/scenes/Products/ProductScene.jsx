import React from "react";
import {connect} from "react-redux"
import {getProduct} from "./products.action"
import {Alert, Card, Col, Row, Spin} from "antd"
import {ASSETS_URL} from "../../services/api"
import Layout from "../../components/Layout/LayoutHOC"
import Reviews from "./Reviews/ReviewsContainer"
import CenteredSpin from "../../components/CenteredSpin"

@Layout
@connect(store => store.productsReducer)
export default class ProductScene extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProduct(this.props.match.params.id))
  }

  render() {
    const {loading, product, error} = this.props
    if (loading) return <CenteredSpin/>
    if (!loading && !product) return <div>No product</div>
    if (error) return <Alert message={"Error displaying reviews: " + error} type="error"/>

    return <Row>
      <Col span={6}>
        <Card className='mr-2'
              title={product.title}>
          <img src={`${ASSETS_URL}/${product.img}`} width='100%'/>
          <div className='p-4'>
            {product.text}
          </div>
        </Card>
      </Col>
      <Col span={12}>
        <Reviews/>
      </Col>
    </Row>

  }
}
