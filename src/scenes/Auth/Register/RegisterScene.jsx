import React, {Component} from 'react'
import Layout from "../../../components/Layout/LayoutContainer";
import RegisterForm from "./RegisterForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Card, notification} from "antd"
import {register} from "../auth.action"

@connect(store => store.authReducer)
export default class Register extends Component {
  componentDidUpdate() {


    if (this.props.error)
      notification.error({
        message: 'Sign up failed',
        description: this.props.error,
      });

    if (this.props.user)
      this.props.history.push('/home')
  }

  handleSubmit(values) {
    this.props.dispatch(register(values))
  }

  render() {
    const {user} = this.props
    if (user) {
      return <Redirect to='/dashboard'/>
    }
    return <Layout>
      <Card style={{maxWidth: 500}} className='mx-auto'>
        <RegisterForm onSubmit={this.handleSubmit.bind(this)}/>
      </Card>
    </Layout>
  }
}
