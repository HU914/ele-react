import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import Star from '../../common/star/star';
import './sellerInfo.less';

class SellerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initY: 0,
      scrollY: 0,
      isCollect: false,
      scroll: {
        scrollY: 0,
        recordY: 0,
        listY: [],
        el: this.refs.sellerContent,
        cls: '.sellerContent'
      }, 
      seller: {
        "name": "粥品香坊（回龙观）",
        "description": "蜂鸟专送",
        "deliveryTime": 38,
        "score": 4.2,
        "serviceScore": 4.1,
        "foodScore": 4.3,
        "rankRate": 69.2,
        "minPrice": 20,
        "deliveryPrice": 4,
        "ratingCount": 24,
        "sellCount": 90,
        "bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
        "supports": [
          {
            "type": 0,
            "description": "在线支付满28减5"
          },
          {
            "type": 1,
            "description": "VC无限橙果汁全场8折"
          },
          {
            "type": 2,
            "description": "单人精彩套餐"
          },
          {
            "type": 3,
            "description": "该商家支持发票,请下单写好发票抬头"
          },
          {
            "type": 4,
            "description": "已加入“外卖保”计划,食品安全保障"
          }
        ],
        "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
        "pics": [
          "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
          "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
          "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
          "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
        ],
        "infos": [
          "该商家支持发票,请下单写好发票抬头",
          "品类:其他菜系,包子粥店",
          "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
          "营业时间:10:00-20:30"
        ]
      },
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
    this.collect = this.collect.bind(this);
  }

  componentDidMount () {
    let scroll = this.state.scroll;
    scroll.el = this.refs.sellerContent;
    this.setState({
      scroll
    })
    new Swiper(this.swiperID);
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
    let ul =  this.state.scroll.el;
    let scroll = this.state.scroll;
    if (this.state.scroll.scrollY < 0) {
      let YY = moveElm.clientHeight - ul.scrollHeight;
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

  sellerNotic () {
    let seller = this.state.seller;
    let notic = seller.supports.map((item,index) => {
      return (
        <li className="saleNoticeItem" key={index}>
          <span className= {"icon " + this.state.classMap[seller.supports[index].type]}></span>
          <span className="text">{item.description}</span>
        </li>
      )
    })
    return notic;
  }

  sellerImg () {
    let seller = this.state.seller;
    let sellerImg = seller.pics.map((item,index) => {
      return (
        <div className="swiper-slide" key={index}>
          <img className='goodsImg' src={item} alt="" />
        </div>
      )
    }) 
    return sellerImg;
  }

  sellerInfo () {
    let seller = this.state.seller;
    let sellerInfo = seller.infos.map((item,index) => {
      return (
        <li className="shopInfoItem" key={index}>
          <p>{item}</p>
        </li>
      )
    })
    return sellerInfo;
  }

  collect () {
    this.setState(preState　=> ({
      isCollect:!preState.isCollect
    })
  )} 

  render() {
    let collect = '';
    if (this.state.isCollect) {
      collect = <span class="collectText">已收藏</span>
    }
    return (
      <div className="seller">
        <div className="sellerContent" ref="sellerContent" onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
          <div className="market">
            <div className="garde">
              <article className="gardeInfo">
                <h1 className="sellerName">{this.state.seller.name}</h1>
                <div className="gardeContent">
                  <Star size='36' score={this.state.seller.serviceScore}></Star>
                  <span className="ratingCount">{this.state.ratingCount}</span>
                  <span className="shopCount"> 月售{this.state.sellCount}单</span>
                </div>
              </article>
              <div className="collect">
                <span className={"iconfont icon-xin " + (this.state.isCollect ? 'collect' : '')} onClick={this.collect}></span>
                {collect}
              </div>
            </div>
            <div className="marketServer">
              <div className="serverDesc">
                <span className="serverTitle">起送价</span>
                <p><span className="number">{this.state.seller.minPrice}</span>元</p>
              </div>
              <div className="serverDesc">
                <span className="serverTitle">商家配送</span>
                <p><span className="number">{this.state.seller.deliveryPrice}</span>元</p>
              </div>
              <div className="serverDesc">
                <span className="serverTitle">平均配送时间</span>
                <p><span className="number">{this.state.seller.deliveryTime}</span>分钟</p>
              </div>
            </div>
          </div>
          <div className="splict"> </div>
          <div className="saleNotice">
            <h1 className="title">公告与活动</h1>
            <p className="bulletin">{this.state.seller.bulletin}</p>
            <ul>
              {this.sellerNotic()}
            </ul>
          </div>
          <div className="splict"> </div>
          <div className="shopImg">
            <h1 className="title">商家实景</h1>
            <section className="swiper-container" ref={self => this.swiperID = self}>
              <div className="swiper-wrapper" >
                {this.sellerImg()}
              </div>
            </section>
          </div>
          <div className="splict"> </div>
          <div className="shopInfo">
            <h1 className="title">商家信息</h1>
            <ul>
              {this.sellerInfo()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
 
export default SellerInfo;