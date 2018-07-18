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
export function addToCart (productId,productName,productPrice,count) {
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

// 编辑商品数量
export function ProductCount(product) {
  return {
    type: types.PRODUCT_COUNT,
    payload: {
      product
    }
  }
}

// 删除商品
export function deleteFromCart(product) {
  return {
    type: types.DELETE_FROM_CART,
    payload: {
      product
    }
  }
}

// 清空购物车
export function clearAllCart () {
  return {
    type:types.CELAR_ALL_CART
  }
}