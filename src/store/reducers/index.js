import { combineReducers } from 'redux'; //combineReducers用于组合多个reducer
import cart from './cart'; //引入cart reducer

const all = {
  buyCart:cart
}

const rootReducer = combineReducers(all);

export default rootReducer;