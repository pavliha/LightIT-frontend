import React from "react";
import {connect} from "react-redux"
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import {ASSETS_URL} from "../../services/api"
import {getProducts} from "./products.action"

@connect(store => store.productsReducer)
export default class ProductListContainer extends React.Component {
  componentDidMount(){
    this.props.dispatch(getProducts())
  }
  render() {
    return <div>
      {this.props.products.map((product, key) =>
        <Card {...key}>
          <CardImg top width="100%" src={`${ASSETS_URL}/static/${product.img}`} alt="Card image cap"/>
          <CardBody>
            <CardTitle>{product.title}</CardTitle>
            <CardText>{product.text}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>)}
    </div>
  }
}
