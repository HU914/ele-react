import * as types from './actions-type';

/**
 * 事件：添加商品
 * @type {Object}
 * example: {
 *    id: 1, 商品ID 
 *    name: "PaiBot（2G/32G)", 商品名称
 *    price: 2999, 商品价格
 *    count: 0, 选择数量
 * }
 */
export function addToCart (id,name,price,count=1) {
  return {
    type: types.ADD_TO_CART,
    goods:{
      id,
      name,
      price,
      count
    }
  }
}
/**
  *  事件：删除商品
  *  id: 1, 商品ID 
*/
export function reduceToCart(id) {
  return {
    type: types.DELETE_FROM_CART,
    id
  }
}

/**
  *  事件：清空购物车
*/
export function clearAllCart () {
  return {
    type:types.CELAR_ALL_CART
  }
}

/**
 * 事件 记录位置
 * site：定位城市
*/

export function recordSite (site) {
  return {
    type:types.RECORD_ADRR,
    site
  }
}

/**
 * 事件 ：保存登录状态
 * bloo：状态
*/

export function recordLog (bloo=false) {
  return {
    type:types.RECORD_LOGIN,
    bloo
  }
}

/**
 * 事件：收藏店铺 
 * @param {*} shop  店铺
 */
export function collectShop (shop) {
  return {
    type:types.ADD_COLLECTSHOP,
    shop
  }
} 

/**
 * 事件：收藏商品 
 * @param {*} good  商品
 */
export function collectGood (good) {
  return {
    type:types.ADD_COLLECTGOOD,
    good
  }
}