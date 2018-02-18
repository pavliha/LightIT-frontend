import React from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {Button, Form, Icon, Input, Rate} from "antd"

const {TextArea} = Input;

@connect(store => store.authReducer)
@withRouter
export default class ReviewForm extends React.Component {

  render() {
    const {user} = this.props
    if(!user) return <div>Sign up to leave the comment</div>
    return <Form>
      <Form.Item>
        <TextArea rows={4} placeholder='Please leave your review here...'/>
      </Form.Item>
      <Form.Item>
        <Rate style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: '1rem'}}
              character={<Icon type="star"/>}/>
      </Form.Item>
      <Form.Item>
        <Button type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  }
}