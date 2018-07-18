import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addToCart,deleteFromCart} from '../../../store/cart/actions';
import './buy.less';

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }
  

  // addCart () {
  //   if (!this.food.count) {
  //     Vue.set(this.food, 'count', 1);
  //   } else {
  //     this.food.count++;
  //   }
  // }

  // decreaseCart () {
  //   if (this.food.count) {
  //     this.food.count--;
  //   }
  // }


  addToCart () {
    this.props.addToCart(11,2,2,4);
  }

  deleteFromCart(){
    this.props.deleteFromCart(11);
  }

  render() { 
    console.log(this.props)
    return (
      <div className="buy">
        <i /*  v-if= 'this.food.count' */ className="minus iconfont icon-wuuiconsuoxiao" onClick={this.addToCart} /* onTouchStart ={this.decreaseCart} */></i>
        <span /*  v-if= 'this.food.count' */ className="count">{22/* this.props.food.count */}</span>
        <i className="sum iconfont icon-msnui-add" onClick={this.deleteFromCart}/*  onTouchStart={this.addCart()} */></i>
      </div>
    );
  }
}
 
export default connect(state =>({
  cart:state.buyCart
}),
{
  addToCart,
  deleteFromCart
})(Buy);
