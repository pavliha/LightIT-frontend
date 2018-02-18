require("react-hot-loader/patch")
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import './style.scss'
import axios from "axios"
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import routes from './routes'

window.axios = axios

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root'),
    )
}

render(routes)

if (module.hot) {
    module.hot.accept()
}
