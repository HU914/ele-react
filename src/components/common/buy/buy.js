import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addToCart,reduceToCart} from '../../../store/cart/actions';
import './buy.less';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
    this.goodCount = this.goodCount.bind(this);
  }
  goodCount (event) {
    let good = this.props.good;
    let type = event.target.getAttribute("data-add");
    if (type === 'add') {
      this.props.addToCart(good.name,good.name,good.price);
      return
    }
    this.props.reduceToCart(good.name);
  }
  render() { 
    let code = '';
    let good =  this.props.good;
    let count = 0;
    let { cart } = this.props;
    cart.forEach(val => {
      if (good.name === val.productName) {
        count = val.count;
      }
    });
    if (count <= 0 ) {
      code =  <i className="sum iconfont icon-msnui-add" onClick={this.goodCount} data-add='add'/*  onTouchStart={this.addCart()} */></i>
    } else {
      code =  <div>
        <i  className="minus iconfont icon-wuuiconsuoxiao" data-add='reduce' onClick={this.goodCount} /* onTouchStart ={this.decreaseCart} */></i>
        <span  className="count">{count}</span>
        <i className="sum iconfont icon-msnui-add" onClick={this.goodCount} data-add='add'/*  onTouchStart={this.addCart()} */></i>
        </div>
    }
    return (
      <div className="buy">
        {code}
       
      </div>
    );
  }
}

 
export default connect(state =>({
  cart:state.sellerCart.sellerCart
}),
{
  addToCart,
  reduceToCart
})(Buy);
