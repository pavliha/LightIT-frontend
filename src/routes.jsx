import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Index from './scenes/Index';
import LoginScene from './scenes/Auth/Login/LoginScene';
import RegisterScene from './scenes/Auth/Register/RegisterScene';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store from './store';
import Home from './scenes/Home';

const history = createBrowserHistory();

export default () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/login" component={LoginScene}/>
        <Route exact path="/register" component={RegisterScene}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </ConnectedRouter>
  </Provider>

