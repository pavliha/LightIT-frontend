import React from 'react';
import {Nav, Navbar, NavItem, NavLink,} from 'reactstrap';
import {Avatar, Dropdown, Icon, Menu} from "antd";
import {Link} from "react-router-dom"


export default class UserNavbar extends React.Component {
  menu = (
    <Menu>
      <Menu.Divider/>
      <Menu.Item key="3"><span onClick={this.props.onLogout}>Logout</span></Menu.Item>
    </Menu>
  );

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {user} = this.props;

    return (
      <div>

        <Navbar className="navbar-dark bg-dark" expand="md">
          <Link className='navbar-brand' to='/'>LightIT</Link>
          <Nav navbar>
            <NavItem>
              <NavLink>
                <Dropdown overlay={this.menu} trigger={['click']}>
                  <div className='d-flex align-items-center'>
                    <Avatar size="large" icon="user"/>
                    <span className='px-2'>{user}</span> <Icon
                    type="down"/>
                  </div>
                </Dropdown>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
