import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom';
import SellerHead from '../sellerHead/sellerHead.js';
import SellerGood from  '../sellerGood/sellerGood.js';
import './shop.less';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="good_warper">
        <SellerHead />
        <div className="tab">
          <Link tag="li" to= "/shop" className="tab-item">商品</Link>
          <Link tag="li" to= "/shop/rating" className="tab-item">评论</Link>
          <Link tag="li" to= "/shop/seller" className="tab-item">商家</Link>
        </div>
        <div className="sellerMain">
          <Route exact  path='/shop' component={SellerGood} />
          <Route path='/shop/rating' component={SellerGood} />
          <Route path="/shop/seller" component={SellerGood} />
        </div>
          {/* <cart ref="cart"></cart>
          <goodsDetail ref="goodWrapper"></goodsDetail> */}
      </div>
    );
  }
}
 
export default Shop;