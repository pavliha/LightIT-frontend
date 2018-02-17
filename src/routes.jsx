import React from 'react';
import Route from 'react-router/es/Route';
import {Switch} from 'react-router-dom';
import Products from './scenes/Products/ProductsScene';
import Product from './scenes/Products/ProductScene';

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
        <Route exact path="/" component={Products}/>
        <Route exact path="/login" component={LoginScene}/>
        <Route exact path="/register" component={RegisterScene}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/products" component={Home}/>
        <Route exact path="/products/:id" component={Product}/>

      </Switch>
    </ConnectedRouter>
  </Provider>

