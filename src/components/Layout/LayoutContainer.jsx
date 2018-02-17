import React from 'react';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import UserNavbar from './UserNavbar';
import GuestNavbar from './GuestNavbar';
import {logout} from "../../scenes/Auth/auth.action";

@connect(store => store.authReducer)
export default class LayoutContainer extends React.Component {

  render() {
    const {user, children, dispatch} = this.props
    return <div>
      {user ? <UserNavbar onLogout={() => dispatch(logout())} user={user}/> : <GuestNavbar/>}

      <Container fluid className='mt-3'>
        {children}
      </Container>
    </div>
  }
}
