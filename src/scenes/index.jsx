import React from "react";
import { Layout } from 'antd'
import HomeScene from './HomeScene'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar'

const { Header, Content, Footer } = Layout

export default class index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div style={{ height: "100%" }}>
        <Header>
          <NavBar/>
        </Header>
        <Content>
          <div className='p-3'>
            <Switch>
              <Route exact path="/" component={HomeScene}/>
            </Switch>
          </div>
        </Content>
      </div>
    );

  }
}
