import React from "react";
import {connect} from "react-redux"
import {getProducts} from "./products.action"
import {Card, Col, Row} from "antd"
import {ASSETS_URL} from "../../services/api"
import {Container} from "reactstrap"
import {Link} from "react-router-dom"
import Layout from "../../components/Layout/LayoutHOC"

@Layout
@connect(store => store.productsReducer)
export default class ProductsScene extends React.Component {
  componentDidMount() {
    this.props.dispatch(getProducts())
  }

  render() {
    return <Container>
      {this.props.products.map((product, key) => {
        return (
          <Card key={key} className='mt-3'
                extra={<Link to={'/products/' + product.id}>Подробнее</Link>}
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
        )
      })}
    </Container>

  }
}
