import React from "react";
import {connect} from "react-redux"
import {Alert, Button, Form, Icon, Input, Rate} from "antd"

const {TextArea} = Input;

@connect(store => store.authReducer)
@Form.create()
export default class ReviewFormContainer extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit(values)
      }
    });
  }

  render() {
    const {user, addError} = this.props
    const {getFieldDecorator} = this.props.form
    if (!user) return <div>Sign up to leave the comment</div>
    return <Form>
      {addError ? <Alert className='mt-3 mb-4' message={"Error adding review: " + addError} type="error"/> : null}
      <Form.Item>
        {getFieldDecorator('text', {
          rules: [{required: true, message: 'Please input your comment',}]
        })(<TextArea rows={4} placeholder='Please leave your review here...'/>)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('rate', {
          rules: [{required: true, message: 'Please rate the product',}]
        })(<Rate style={{color: 'rgba(0, 0, 0, 0.3)', fontSize: '1rem'}}
                 character={<Icon type="star"/>}/>)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' onClick={this.handleSubmit}>Submit</Button>
      </Form.Item>
    </Form>
  }
}