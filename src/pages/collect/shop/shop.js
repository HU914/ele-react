import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Star from '../../../components/star/star';
// import this from '../../common/scroll';
import './shop.less';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: {
        listY: [],
        index:0,
        scrollY: 0,
        recordY: 0,
        listH: [],
        warpperEl:'',
        targetEl: ''
      }
    }
  }
  componentDidMount () {
    let scroll = this.state.scroll;     
    scroll.warpperEl = this.refs.shop;          // 元素初始化
    scroll.targetEl = this.refs.shopContent;          // 元素初始化
    this.setState({                           // 状态保存
      scroll,
    });
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
    let scroll = this.state.scroll;
    let recordY = scroll.recordY; 
    scroll.initY = Math.ceil(event.changedTouches[0].clientY) + Math.abs(recordY)
    this.setState(scroll);
  }
  startScroll (event) {
    let scroll = this.state.scroll;
    let moveElm = scroll.targetEl;
    scroll.scrollY = scroll.recordY =  Math.ceil(event.changedTouches[0].clientY - scroll.initY)
    this.setState({
      scroll
    })
    if (scroll.scrollY < 0) {
      moveElm.style.position = 'relative';
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(this.state.scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(scroll.scrollY) + 'px';
    }
  }
  entScroll () {
    let scroll = this.state.scroll;
    let moveElm = scroll.targetEl;
    if (scroll.scrollY < 0) {
      let YY = scroll.warpperEl.clientHeight - moveElm.scrollHeight;
      if(  moveElm.scrollHeight < scroll.warpperEl.clientHeight) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.2s';
        return;
      }
      if (Math.abs(scroll.scrollY) >= Math.abs(YY)) {
        scroll.recordY = scroll.scrollY = YY;
        moveElm.style.top = YY + 'px';
        moveElm.style.transition = 'all 0.5s';
      }
    } else {
      if (moveElm.getBoundingClientRect().top > 0) {
        moveElm.style.top = scroll.recordY = 0;
        moveElm.style.transition = 'all 0.5s';
      }
    }
    this.setState(scroll);
  }
  render() { 
    return (
      <div className="shop" ref='shop'>
        <div className="shopContent" ref='shopContent' onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
          <ul className='shopList'>
            <li className='shopItem'>
              <div className='shopImg'>
                <Link to='/collect'>
                  <img  alt=""/>
                </Link>
              </div>
              <div className='shopDesc'>
                <h5 className='shopName'>大白粥米店</h5>
                <Star size='24' score='3.6'/>
                <ul className='shopServer'>
                  <li>起送￥20</li>
                  <li>配送￥10</li>
                  <li>美团专送</li>
                </ul>
              </div>
            </li>
            <li className='shopItem'>
              <div className='shopImg'>
                <Link to='/collect'>
                  <img  alt=""/>
                </Link>
              </div>
              <div className='shopDesc'>
                <h5 className='shopName'>大白粥米店</h5>
                <Star size='24' score='3.6'/>
                <ul className='shopServer'>
                  <li>起送￥20</li>
                  <li>配送￥10</li>
                  <li>美团专送</li>
                </ul>
              </div>
            </li>
            <li className='shopItem'>
              <div className='shopImg'>
                <Link to='/collect'>
                  <img  alt=""/>
                </Link>
              </div>
              <div className='shopDesc'>
                <h5 className='shopName'>大白粥米店</h5>
                <Star size='24' score='3.6'/>
                <ul className='shopServer'>
                  <li>起送￥20</li>
                  <li>配送￥10</li>
                  <li>美团专送</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Shop;