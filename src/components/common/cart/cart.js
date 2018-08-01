import './cart.less';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import '../../common/animated/animated.less';
import {clearAllCart} from '../../../store/cart/actions';
import { CSSTransition} from "react-transition-group";
import GoodList from './goodList/goodList';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      cartHieght:48,
    }
    this.onlineScroll = this.onlineScroll.bind(this);
    this.acquireHeight = this.acquireHeight.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  onlineScroll (event) {                 //商品类型 + 商品  滚动效果 
    let type = event.type;
    switch (type) {
      case 'touchstart':
        this.initScrollData(event)
        break;
      case 'touchmove':
        this.startScroll(event)  
        break;
      default:
        this.entScroll()
    }
  }
  
  initScrollData (event) {
    this.setState({initY : Math.ceil(event.changedTouches[0].clientY) + Math.abs(this.state.scroll.recordY)});
  }

  startScroll (event) {
    let moveElm = this.state.scroll.el;
    let scroll = this.state.scroll;
    let scrollY = this.state.scrollY;
    scrollY = scroll.scrollY  = scroll.recordY =  Math.ceil(event.changedTouches[0].clientY - this.state.initY)
    this.setState({
      scroll,
      scrollY
    })
    if (this.state.scroll.scrollY < 0) {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    }
  }

  entScroll () {
    let moveElm = this.state.scroll.el;
    let cartGoodsH = this.refs.goodsType;
    let ul = this.state.scroll.el.querySelector(this.state.scroll.cls + '>ul');
    let scroll = this.state.scroll;
    if (this.state.scroll.scrollY < 0) {
      let YY = cartGoodsH.clientHeight - this.acquireHeight() - ul.scrollHeight;
      if (Math.abs(this.state.scroll.scrollY) >= Math.abs(YY)) {
        scroll.recordY = scroll.scrollY = YY;
        moveElm.style.top = YY + 'px';
        moveElm.style.transition = 'all 0.2s';
      }
    } else {
      if (moveElm.getBoundingClientRect().top > 0) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
      }
    }
    this.setState(scroll);
  }

  ShowBlock () {                         // 购物车 商品列表 显示
    if (!this.props.selectFoods.length) {
      this.setState({isActive:false});
      return;
    }
    this.setState((prevState) => {
      return {isActive:!prevState.isActive}
    })
  }
  
  clearAll () {                           // 清空购物车
    this.props.clearAllCart();
    this.ShowBlock();
  }

  acquireHeight () {                      // 获取购物车视口高度，用于计算滚动差距
    var height = this.refs.cart.clientHeight;
    this.props.getCartHeight(height);
    this.setState({cartHieght:height})
    return height;
  }

  render() {
    let pay = false;
    let {selectFoods} = this.props;
    let totalPrice = 0;     // 总金额
    let serverPrice;  //配送费用
    selectFoods.forEach((val,index) =>{
      serverPrice = 45
      totalPrice += (val.price * val.count);
      serverPrice = (serverPrice - totalPrice);
      if ( serverPrice <= 0) {
        pay = true;
        serverPrice = 0;
      }
    })
    return (
      <div className="cart" ref='cart'>
      <CSSTransition 
      in={this.state.isActive}
      classNames="fadeInBottomO" 
      timeout={500}
      unmountOnExit
      >
        <GoodList selectFoods ={selectFoods} clearAll={this.clearAll} height={this.acquireHeight}/>
      </CSSTransition>
      <div className="c-c" onClick={this.ShowBlock.bind(this)}>
        <div className={"c-c-c " + (selectFoods.length ? 'c_c_count' : '') }>{/* :className="{c_c_count:selectFoods.length}" */}
          <span className="iconfont icon-gouwuche"></span>
        </div>
        {selectFoods.length ? <div className="count" v-show="totalCount">
         <span>{selectFoods.length}</span>
        </div> : ''}
      </div>
      <div className="c-left">
        <div className="c-price">
          <span className="c-p-prize">￥{totalPrice}</span>
        </div>
        <div className="c-info">
          <span className="c-i-info">另需配送费￥{serverPrice}元</span>
        </div>
      </div>
      <div className= {"c-right " + (pay ? 'payment':'')}>
        <span>{pay ? '去付款' : '￥45起送'}</span>
      </div>
  </div>
    );
  }
}
 
export default connect(state => ({

}),{
  clearAllCart
})(Cart);