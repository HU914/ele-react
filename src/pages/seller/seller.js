import React from 'react';
import {Link} from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './seller.less';
import Start from '../../components/star/star'
import Axios from '../../Api/Axios';

// 滑动栏导航图标
const IconList = (props) => {
  return (
    props.icon.map((val,index) => {
      if(index >= 8){ return ''};
      return (
        <div className="goodsItem" key={index}>
          <Link to=''>
            <img className='goodsImg' src={val.img} alt="" />
            <p className='imgText'>{val.name}</p>
          </Link>
        </div>
      )
    })
  )
}
// 商家列表   使用无状态组件能更友好的优化react的性能，原理为：没有状态，就跳过了很多底层状态的交互
              // 键入KEY值，能使react渲染更快，原理为：有key的情况下，react根据键值来渲染数据改变的组件，而没有改变的则不重新渲染，省略了重复渲染时间和性能
const SellerList = (props) => {
  return (
    props.seller.map((val,index) => {
      return (
      <div className="s_seller" key={index}>
        <div className="sellerImg">
          <Link to='/shop'>
            <img className='s_img' src={val.img} alt="" />
          </Link>
        </div>
        <div className="s_desc">
          <p className='title'>{val.name}</p>
          <div className='rating'>
            <Start size='24' score={val.score}></Start>
            <span className='score'>{val.score}</span>
          </div>
          <span>月售{val.sellCount}单</span>
          <p className='delivery'>
            <span>¥{val.minPrice}起送 /</span>
            <span>配送费约¥{val.deliveryPrice}</span>
          </p>
        </div>
        <div className="s_server">
          <p className="pledge">保准票</p>
          <p className="time_pledge">
            <span>蜂鸟专送</span>
            <span>准时达</span>
          </p>
          <p className="distance_time">
            <span>{val.deliveryTime}</span>
            <span></span>
          </p>
        </div>
      </div>
      )
    })
  )
}


class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4],
      scroll: {
        listY: [],
        index:0,
        scrollY: 0,
        recordY: 0,
        listH: [],
        warpperEl:'',
        targetEl: ''
      },
      seller:[]
    }
  }
  componentDidMount() {
    this.getSellerMesaage();
    new Swiper(this.swiperID, {
      pagination: {
        el: this.paginateID,
      },
    });
    let scroll = this.state.scroll;     
    scroll.warpperEl = this.refs.sellerWarp;          // 元素初始化
    scroll.targetEl = this.refs.sellerMain;          // 元素初始化
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
      moveElm.style.top = Math.ceil(scroll.scrollY) + 'px';
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
  getSellerMesaage = async () => {
    try {
      let result = await Axios.getSellerMesaage();
      this.setState(preState => ({
        seller:result.articles
      }));
    }
    catch (err){
      console.error(err);
    }
  }
  render() {
    return (
      <div className="sellerWarp" ref='sellerWarp'>
        <div className="sellerMain" ref='sellerMain' onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
          <section className="swiper-container" ref={self => this.swiperID = self}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="s_content">
                  <IconList icon={this.state.seller}/>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="s_content">
                  <IconList icon={this.state.seller}/>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" ref={self => this.paginateID = self}></div>
          </section>
          <div className="sellers">
            <h5 className='title'>
              <i className='iconfont icon-shouye'></i>
              附近商家
            </h5>
            <SellerList seller={this.state.seller}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Goods;