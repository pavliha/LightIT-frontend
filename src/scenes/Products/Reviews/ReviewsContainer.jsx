import React from "react";
import {Alert, Avatar, Col, Icon, Input, List, Rate, Row, Spin, TextArea} from "antd"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {getReviews} from "./reviews.action"
import moment from 'moment'
import ReviewForm from "./ReviewForm"
import CenteredSpin from "../../../components/CenteredSpin"

@connect(store => store.reviewsReducer)
@withRouter
export default class ReviewsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(getReviews(this.props.match.params.id))
  }

  render() {
    const {loading, reviews, error} = this.props
    if (loading) return <CenteredSpin/>
    if (!loading && !reviews.length) return <div>No reviews</div>
    if (error) return <Alert message={"Error displaying reviews: " + error} type="error"/>

    return <List
      size="large"
      header={<ReviewForm/>}
      bordered
      dataSource={reviews}
      renderItem={item => (
        <List.Item>
          <Row type="flex" justify="start">
            <Col className='d-flex flex-column justify-content-center align-items-center'>
              <Avatar size='large' className='mr-3'>{item.created_by.username}</Avatar>
              <small className='mr-3'>{item.created_by.username}</small>
            </Col>
            <Col>
              <small>{moment(item.created_at).fromNow()}</small>
              <div>{item.text}</div>
              <div>
                <Rate disabled
                      defaultValue={item.rate}
                      style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: '1rem'}}
                      character={<Icon type="star"/>}/>
              </div>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  }
}