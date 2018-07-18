import * as types from './actions-type'; //引入发布的状态

const initialState = {                 //模拟初始状态，
  cart: [],
}

const addGood = (state = initialState.cart,action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
    return {
      ...state,
      cart:state.map(item => item.prouductId === action.goods.prouductId ? action.goods : item)
    }
    default:
      return state
  }
}

const addGoodCount = (state = initialState.cart, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: 
      return {
        ...state,
        cart:state.map(item => item.prouductId === action.goods.prouductId ?( (item.count || 0) + 1) : item)
      }
    default:
      return state
  }
}
const reduceGoodCount = (state = initialState.cart, action) => {
  switch (action.type) {
    case types.ADD_TO_CART: 
      return {
        ...state,
        cart:state.map(item => item.prouductId === action.goods.prouductId ? (item.count ? item.count + 1 : 1) : item)
      }
    default:
      return state
  }
}

export const cart = (state=initialState,action) => {     //在初始数据上 发布新数据，先到reducer，检查状态，
  switch(action.type) {
    case types.ADD_TO_CART: 
      return {
        addGood: addGood(state.cart, action),
        addGoodCount: addGoodCount(state.cart, action),
        reduceGoodCount: reduceGoodCount(state.cart, action)
      }
    // case types.PRODUCT_COUNT: 
    
    // case types.DELETE_FROM_CART: 
     
    // case types.CELAR_ALL_CART: 
     
    default:
    return state;                             //传给储存区
  }
}
