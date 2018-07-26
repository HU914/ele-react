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