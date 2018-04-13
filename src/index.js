require("react-hot-loader/patch")

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import axios from "axios"

import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import './style.scss'

import Index from './scenes/index'

const history = createBrowserHistory()

window.axios = axios

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(() =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Index/>
    </ConnectedRouter>
  </Provider>
)

if (module.hot) {
  module.hot.accept()
}
