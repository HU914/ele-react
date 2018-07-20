import * as types from './actions-type'; //引入发布的状态

const initialState = {                 //模拟初始状态，
  sellerCart: []
}


const addToCart = (state=initialState,action) => {            // 添加商品
  if (state.sellerCart.length) {
      return state.sellerCart.map((item) => {
        if (item.productId === action.goods.productId) {
          item.count+=1;
          return item;
        } else {
          console.log(2);
          return [...state.sellerCart,action.goods]
        }
      })
    }
  return [...state.sellerCart,action.goods];
}

const reduceToCart = (state=initialState,action) => {         // 删除商品
  if (state.sellerCart.length) {
    return state.sellerCart.map((item) => {
      if (item.productId === action.productId) {
        if (item.count > 1) {
          item.count -= 1;
          return item;
        } else {
          item.count = 0;
          return state.sellerCart.filter(item => item.count !== 0)
        }
      } else {
        console.log(2);
        return [...state.sellerCart,action.goods]
      }
    })
  }
  return [...state.sellerCart,action.goods];
}

const clearAllCart = (action) => {         // 清空购物车
  return [action.goods]
}



export const sellerCart = (state=initialState,action) => {     //在初始数据上 发布新数据，先到reducer，检查状态，
  switch(action.type) {
    case types.ADD_TO_CART: 
      return {
        sellerCart: addToCart(state,action)
      } 
    case types.DELETE_FROM_CART: 
      return {
        sellerCart:reduceToCart(state,action)
      }
    case types.CELAR_ALL_CART: 
      return {
        sellerCart:clearAllCart(action)
      }
    default:
    return state;                             //传给储存区
  }
}
