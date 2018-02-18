import React from "react";
import {connect} from "react-redux"
import {getProducts} from "./products.action"
import {Button, Card, Col, Row} from "antd"
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
      <Row>
        {this.props.products.map((product, key) => {
          return (
            <Col key={key} span={7}>
              <Card
                style={{width: 300}}
                cover={<img alt="example" height={250} src={`${ASSETS_URL}/${product.img}`}/>}>
                <Card.Meta
                  title={product.title}
                  description={<div>{product.text}
                    <div className='mt-3'><Link to={'/products/' + product.id}><Button className='btn-block'>Подробнее</Button></Link></div>
                  </div>}/>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>

  }
}
