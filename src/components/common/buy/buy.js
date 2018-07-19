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
    let type = event.target.getAttribute("data-add");
    if (type === 'add') {
      this.props.addToCart(11,2,2);
      return
    }
    this.props.reduceToCart(11);
  }
  
  render() { 
    return (
      <div className="buy">
        <i /*  v-if= 'this.food.count' */ className="minus iconfont icon-wuuiconsuoxiao" data-add='add' onClick={this.goodCount} /* onTouchStart ={this.decreaseCart} */></i>
        <span /*  v-if= 'this.food.count' */ className="count">{22/* this.props.food.count */}</span>
        <i className="sum iconfont icon-msnui-add" onClick={this.goodCount} data-add='reduce'/*  onTouchStart={this.addCart()} */></i>
      </div>
    );
  }
}
 
export default connect(state =>({
  carttt:state.buyCart
}),
{
  addToCart,
  reduceToCart
})(Buy);
