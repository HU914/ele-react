import {ADD_TO_CART} from '../actions/actions'; //引入发布的状态

const initialState = {                 //模拟初始状态，
  cart: []
}

export default (state=initialState,action) => {     //在初始数据上 发布新数据，先到reducer，检查状态，
  switch(action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart:[...state.cart,action.payload]         //改变状态
      }
    }
    default:
    return state;                             //传给储存区
  }
}