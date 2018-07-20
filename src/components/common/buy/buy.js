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
  
  componentDidMount () {
    let goods = this.props.cart;
    let good = goods.filter(item => item.productId === this.props.good.name);
    this.setState({
      count:good.count
    })
  }

  goodCount (event) {
    let good = this.props.good;
    // let good = goods.filter(item => item.productId === this.props.good.name);
    let type = event.target.getAttribute("data-add");
    if (type === 'add') {
      this.props.addToCart(good.name,good.name,good.price);
      return
    }
    this.props.reduceToCart(good.name);
  }
  
  render() { 
    return (
      <div className="buy">
        {this.state.count ? `<i  className="minus iconfont icon-wuuiconsuoxiao" data-add='reduce' onClick={this.goodCount} /* onTouchStart ={this.decreaseCart} */></i>
      <span  className="count">{this.state.count}</span>` : ''}
        <i className="sum iconfont icon-msnui-add" onClick={this.goodCount} data-add='add'/*  onTouchStart={this.addCart()} */></i>
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
