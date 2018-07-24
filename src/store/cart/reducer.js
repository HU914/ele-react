import * as types from './actions-type'; //引入发布的状态 

const initialState = {                 //模拟初始状态，
  sellerCart: []
}

const addToCart = (state=initialState.sellerCart,action) => {            // 添加商品
  if (JSON.stringify(state).indexOf(JSON.stringify(action.goods.productId))!==-1) { //查询商品是否存在
    let newState = state.map((item) => {
      if (item.productId === action.goods.productId) { //存在 +1
        item.count+=1;
        return item;
      } else {
        return item; // 不存在 返回原对象
      }
    })
    return newState; //返回新的数组
  }
  return [...state,action.goods];
}

const reduceToCart = (state=initialState.sellerCart,action) => {         // 删除商品
  if (JSON.stringify(state).indexOf(JSON.stringify(action.product))!==-1) {
    let newState = state.map((item) => {
      if (item.productId === action.product) {
        if (item.count > 1) {
          item.count -= 1;
          return item;
        } else {
          item.count = 0;
          return item
        }
      } else {
        return item;
      }
    })
    return newState;
  }
  return [...state,action.goods];
}

const clearAllCart = (action) => {         // 清空购物车
  return [action.goods]
}



export const sellerCart = (state=initialState,action) => {     //在初始数据上 发布新数据，先到reducer，检查状态，
  switch(action.type) {
    case types.ADD_TO_CART: 
      return {
        ...state,
        sellerCart: addToCart(state.sellerCart, action)
      }
    case types.DELETE_FROM_CART: 
      return {
        ...state,
        sellerCart:reduceToCart(state.sellerCart,action)
      }
    case types.CELAR_ALL_CART: 
      return {
        sellerCart:clearAllCart(action)
      }
    default:
    return state;                             //传给储存区
  }
}
