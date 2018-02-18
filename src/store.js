import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './scenes/Auth/auth.reducer'
import {login} from "./scenes/Auth/auth.action";
import productsReducer from './scenes/Products/products.reducer'
import reviewsReducer from './scenes/Products/Reviews/reviews.reducer'

const reducers = combineReducers({
  router: routerReducer,
  authReducer,
  productsReducer,
  reviewsReducer
})


const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    promiseMiddleware()
  )))

if (localStorage.getItem('user')) {
  store.dispatch(login())
}
export default store