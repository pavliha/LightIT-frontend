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
      <Row type="flex" justify="center" align="top">
        {this.props.products.map((product, key) => {
          return (
            <Col key={key} span={{xs: 12, sm: 7}}>
              <Card className='m-2'
                    cover={
                      <div style={{width: 300, height: 300}}>
                        <img src={`${ASSETS_URL}/${product.img}`} width='100%'/>
                      </div>
                    }>
                <Card.Meta
                  title={product.title}
                  description={<div>{product.text}
                    <div className='mt-3'><Link to={'/products/' + product.id}><Button
                      className='btn-block'>Подробнее</Button></Link></div>
                  </div>}/>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>

  }
}
