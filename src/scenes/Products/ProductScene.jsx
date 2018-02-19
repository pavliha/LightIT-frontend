import React from "react";
import {connect} from "react-redux"
import {getProduct} from "./products.action"
import {Alert, Button, Card, Col, Icon, Row} from "antd"
import {ASSETS_URL} from "../../services/api"
import Layout from "../../components/Layout/LayoutHOC"
import Reviews from "./Reviews/ReviewsContainer"
import CenteredSpin from "../../components/CenteredSpin"
import {Link} from "react-router-dom"

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

    return <Row type='flex'>
      <Col xs={24} md={7}>
        <Card className='mx-md-3'
          cover={<img alt="example" src={`${ASSETS_URL}/${product.img}`}/>}>
          <Card.Meta
            title={product.title}
            description={<div>
              {product.text}
            </div>}/>
        </Card>
        <div className='my-3 m-md-3'>
          <Link to={'/products'}>
            <Button type="primary" className='btn-block '>
              <Icon type="left"/>Go back
            </Button>
          </Link>
        </div>
      </Col>
      <Col xs={24} md={17}>
        <Reviews/>
      </Col>
    </Row>

  }
}
