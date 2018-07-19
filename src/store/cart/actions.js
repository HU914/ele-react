import * as types from './actions-type';

    /**
   * 商品数据
   * @type {Array}
   * example: [{
   *    productId: 1, 商品ID 
   *    productName: "PaiBot（2G/32G)", 商品名称
   *    productPrice: 2999, 商品价格
   *    count: 0, 选择数量
   * }]
   */
// 添加商品
export function addToCart (productId,productName,productPrice,count=1) {
  return {
    type: types.ADD_TO_CART,
    goods:{
      productId,
      productName,
      productPrice,
      count
    }
  }
}

// 删除商品
export function reduceToCart(product) {
  return {
    type: types.DELETE_FROM_CART,
    product
  }
}

// 清空购物车
export function clearAllCart () {
  return {
    type:types.CELAR_ALL_CART,
    goods:[]
  }
}