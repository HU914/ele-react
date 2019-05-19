import * as types from './actions-type'; //引入 action 类型 

/**
 * 购物车
 * 
 */
const initialState = {                 //模拟初始状态数据，
  sellerCart: []
}

const addToCart = (state=initialState.sellerCart,action) => {            // 添加商品
  if (JSON.stringify(state).indexOf(JSON.stringify(action.goods.id))!==-1) { //查询商品是否存在
    let newState = state.map((item) => {
      if (item.id === action.goods.id) { //存在 +1
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
  if (JSON.stringify(state).indexOf(JSON.stringify(action.id))!==-1) {
    let newState = state.map((item) => {
      if (item.id === action.id) {
        if (item.count > 1) {
          item.count -= 1;
          return item;
        } else {
          item.count = 0;
          item = null;
          return item
        }
      } else {
        return item;
      }
    })

    newState.forEach(item => {            // 清理数量为 0 的商品
      if (item === null) {
        let delectList = newState.splice(newState.indexOf(null),1);
        return delectList;
      }
    });
    return newState;
  }
  return [...state,action.goods];
}

export const sellerCart = (state=initialState,action) => {     // 更改数据过程，reducer，
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
        sellerCart:[]     // 清空购物车
      }
    default:
    return state;                             // 修改状态后的返回值
  }
}

/**
 * 保存位置状态
 */
const siteState = {
  site:''
}

export const site = (state=siteState,action) => {
  switch(action.type) {
    case types.RECORD_ADRR:
      return {
        site:action.site
      }
    default:
      return state  
  } 
}

/**
 * 保存登录状态
 */
const logState = {
  log:''
}

export const log = (state=logState,action) => {
  switch(action.type) {
    case types.RECORD_LOGIN:
      return {
        log:action.bool
      }
    default:
      return state  
  }
}

/**
 * 收藏
 * 
 */

const collectObj = {
   shop: [],
   good:[]
 }

export const collect = (state=collectObj,action) => {
  switch(action.type) {
    case types.ADD_COLLECTSHOP:
      return {
        ...state,
        shop: [...state.shop,action.shop]
      }
    default:
      return {
        ...state,
        shop: [...state.good,action.good]
      } 
  }
}