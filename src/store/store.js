import { createStore,combineReducers } from "redux";//combineReducers用于组合多个reducer
import {composeWithDevTools} from 'redux-devtools-extension'; //redux调试工具
import {cart} from './cart/reducer'; //引入cart reducer

const all = {
  buyCart:cart
}
const rootReducer = combineReducers(all);

let store = createStore(rootReducer,composeWithDevTools()); //创建状态储存区域

export default store;