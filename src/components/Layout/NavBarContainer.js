import React from 'react';
import {logout} from "../../scenes/Auth/auth.action"
import {connect} from "react-redux"
import UserNavbar from "./UserNavbar"
import GuestNavbar from "./GuestNavbar"

@connect(store => store.authReducer)
export default class NavBarContainer extends React.Component {

  render() {
    const {user} = this.props;
    if(user) return <UserNavbar onLogout={() => this.props.dispatch(logout())} user={user}/>
    return <GuestNavbar/>
  }
}
