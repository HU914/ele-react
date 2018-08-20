import React, { Component } from 'react'
import Buy from '../../buy/buy';
import './goodList.less';

class GoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.clearAll = this.clearAll.bind(this)
  }

  componentDidMount () {
    let scroll = this.state.scroll;
    scroll.el = this.refs.goodItem;
    this.setState(scroll);
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
      let YY = cartGoodsH.clientHeight - this.props.height() - ul.scrollHeight;
      if(  ul.scrollHeight < cartGoodsH.clientHeight) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
        return;
      }
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

  goodList () {
    let goodList;
    if (this.props.selectFoods.length) {
      goodList = this.props.selectFoods.map((val,index) =>{
        return (
          <li className="typeItem"  key={val.id}  onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
            <span className="goodsName">{val.name}</span>
            <span className="goodPrice">￥<span className="p-price">{val.price * val.count}</span></span>
            <Buy good={val}></Buy>
          </li>
        )
      })
    }
    return goodList;
  }

  clearAll () {
    this.props.clearAll();
  }
  render() { 
    return (
      <div className="goodsType_wraper">
      <div className="goodsType" ref='goodsType'>
        <div className="g_title">
          <span className="g_cart">购物车</span>
          <span className="clear" onClick={this.clearAll}>清空</span>
        </div>
        <div ref="goodItem" className="goodItem">
          <ul >
            {this.goodList()}
          </ul>
        </div>
      </div>
    </div>
    );
  }
}
 
export default GoodList;