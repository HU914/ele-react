export const ADD_TO_CART = 'ADD_TO_CART';

// 定义改变状态的方法，增加，减少，改变，type是必须存在的，
/**
 * 
 * @param {*} product 产品
 * @param {*} quantity 数量
 * @param {*} unitCost 成本
 */
export function addToCart (product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}