import React, {Component} from 'react';
import {Card} from 'reactstrap';
import LoginForm from "./LoginForm";
import {login} from "../auth.action";
import {connect} from "react-redux";
import {notification} from 'antd';
import Layout from "../../../components/Layout/LayoutHOC"

@Layout
@connect(store => store.authReducer)
export default class Login extends Component {
  handleSubmit(values) {
    this.props.dispatch(login(values))
  }

  componentDidUpdate() {
    if (this.props.error) {
      notification.error({
        message: 'Login failed',
        description: this.props.error,
      });
    }
    if (this.props.user)
      this.props.history.push('/home')
  }

  render() {
    return <Card style={{maxWidth: 400}} className='mx-auto p-4'>
      <LoginForm errors={this.props.errors} onSubmit={this.handleSubmit.bind(this)}/>
    </Card>
  }
}