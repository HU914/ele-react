import * as types from './actions-type'; //引入发布的状态

const initialState = {                 //模拟初始状态，
  cart: [],
}





export const cart = (state=initialState,action) => {     //在初始数据上 发布新数据，先到reducer，检查状态，
  switch(action.type) {
    case types.ADD_TO_CART: 
      return {
        ...state,
        cart:state.cart.map(item => item.prouductId === action.goods.prouductId ? item : action.goods)
      } 
    
    case types.DELETE_FROM_CART: 

      return {
        ...state,
        cart:(function() {
         return state.cart.map((item) => { 
            if (item.prouductId === action.prouductId) {
              item.count+=1;
              return item;
            }
          })
        })()
      }
     
    // case types.CELAR_ALL_CART: 
     
    default:
    return state;                             //传给储存区
  }
}
