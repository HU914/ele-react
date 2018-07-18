import React, { Component } from 'react';
import './cart.less';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      initY: 0,
      scrollY: 0,
      scroll: {
        scrollY: 0,
        recordY: 0,
        listY: [],
        el: this.refs.goodItem,
        cls: '.goodItem'
      }
    }
    this.initScrollData = this.initScrollData.bind(this);
    this.startScroll = this.startScroll.bind(this);
    this.entScroll = this.entScroll.bind(this);
  }

  componentDidMount () {
    let scroll = this.state.scroll;
    scroll.el = this.refs.goodItem;
    this.setState(scroll);
  }


  // watch: {
  //   selectFoods (val, tt) {
  //     if (!val.length) {
  //       this.isActive = false;
  //     }
  //   }
  // },

    ShowBlock () {
      if (!this.props.selectFoods.length) {
        this.setState({isActive:false});
        return;
      }
      this.setState((prevState) => {
        return {isActive:!prevState.isActive}
      })
    }
    clearAll () {
      this.props.selectFoods.forEach(food => {
        food.count = 0;
      });
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
        console.log(YY);
        if (Math.abs(this.state.scroll.scrollY) >= Math.abs(YY)) {
          scroll.recordY = scroll.scrollY = YY;
          moveElm.style.top = YY + 'px';
          moveElm.style.transition = 'all 0.2s';
        }
      } else {
        if (moveElm.getBoundingClientRect().top > 174) {
          moveElm.style.top = scroll.recordY = 0;
          moveElm.style.transition = 'all 0.2s';
        }
      }
      this.setState(scroll);
    }
    acquireHeight () {
      var height = this.refs.cart;
      return height.clientHeight;
    }

  render() { 
    let goodList;
    goodList = this.props.selectFoods.map((val,index) =>{
      return (
        <li className="typeItem"  key={index} onTouchStart= {this.initScrollData} onTouchMove = {this.startScroll} onTouchEnd= {this.entScroll}>
          <span className="goodsName">{val}</span>
          <span className="goodPrice">￥<span className="p-price">{val}</span></span>
          {/* <BUY :food='val'></BUY> */}
        </li>
      )
    })
    return (
      <div className="cart" ref='cart'>
      <div className="goodsType_wraper" style={this.state.isActive ? {display:'block'}:{display:'none'}}>
        <div className="goodsType" ref='goodsType'>
          <div className="g_title">
            <span className="g_cart">购物车</span>
            <span className="clear" onClick={this.clearAll.bind(this)}>清空</span>
          </div>
          <div ref="goodItem" className="goodItem">
            <ul >
              {goodList}
            </ul>
          </div>
        </div>
      </div>
      <div className="c-c" onClick={this.ShowBlock.bind(this)}>
        <div className="c-c-c" >{/* :className="{c_c_count:selectFoods.length}" */}
          <span className="iconfont icon-gouwuche"></span>
        </div>
        <div className="count" v-show="totalCount">
         <span>{/*  {{totalCount}} */}</span>
        </div>
      </div>
      <div className="c-left">
        <div className="c-price">
          <span className="c-p-prize">￥45</span>
        </div>
        <div className="c-info">
          <span className="c-i-info">另需配送费￥45元</span>
        </div>
      </div>
      <div className="c-right">
        <span>￥45起送 </span>
      </div>
  </div>
    );
  }
}
 
export default Cart;