import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../../store/cart/actions';
import './goodsDetail.less';
import Buy from '../../common/buy/buy';
import Rating from '../../common/rating/rating';

class goodsDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      selectType: 2,
      onlyContent: false,
      initY: 0,
      scrollY: 0,
      ratingText:false,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      },
      scroll: {
        scrollY: 0,
        recordY: 0,
        listY: [],
        el: this.refs.goodsDetails,
        cls: '.goodsDetails'
      }
    }
    this.showBlock = this.showBlock.bind(this)
    this.addFoot = this.addFoot.bind(this)
    this.transfrom = this.transfrom.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
  }

  componentDidMount () {
    let scroll = this.state.scroll;
    scroll.el = this.refs.goodsDetails;
    this.setState({
      scroll
    })
  }

  showBlock () {                 // 控制详情页显示
    this.props.goodDetail();
    this.selectType = 2;        //默认 全部评价
    this.onlyContent = true;    // 默认 显示全部评价（有内容或无内容）
  }

  transfrom (type) {
    this.setState({selectType : type});   // 设置评价组件 评价类型
  }

  toggleContent () {
    this.setState(preState => ({         // 切换 有内容和无内容 评价的 状态码
      onlyContent:!preState.onlyContent
    }))
  }

  addFoot () {               // 添加商品
    let good = this.props.good;
    this.props.addToCart(good.name,good.name,good.price);
  }

  itive (val) {             // 显示 赞和吐槽的UI
    if (val.rateType) {
      return true;
    }
    return false;
  }

  needShow (type, text) {   //控制  有内容和无内容 view
    if (this.state.onlyContent && !text) {
      return false;
    };
    if (this.state.selectType === 2) {
      return true;
    } else {
      return type === this.state.selectType;
    }
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

  formatDate (date, str) {      //  格式化时间搓
    if (/(y+)/.test(str)) {
      str = str.replace(RegExp.$1, (date.getFullYear() + ' ').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(str)) {
        let stry = o[k] + '';
        str = str.replace(RegExp.$1, (RegExp.$1.length === 1) ? stry : this.padLeftZero(stry));
      }
    }
    return str;
  }

  padLeftZero (str) {           // 对格式化后的时间搓进一步的加工
    return ('00' + str).substr(str.length);
  }

  ratingItem() {                // 评价 view
    let rating;
    rating = this.props.good.ratings.map((item, index) => {
      let data = new Date(item.rateTime);
      if (this.needShow(item.rateType,item.text)) {
        return (
          <li className="ratingItem"   key={index}>
            <div>
              <p className="itemTime">{this.formatDate(data,'yyyy-MM-dd hh:mm:ss')}</p>{/*  val.rateTime | formatDate */}
              <p className="itemUserInfo">
                {item.username}
                <img src={item.avatar} alt='' />
              </p>
            </div>
            <p className="ratingText">
              <span className={ "iconfont " + (this.itive(item) ? 'icon-zan4' : 'icon-zan')}></span>
              {item.text}
            </p>
        </li>)
      }
      return '';
      })
    return rating;
  }

  render() {
    let good =  this.props.good;
    let count = 0;
    let { goods } = this.props; //取出 this.props 中的 goods 对象
    goods.forEach(val => {
      if (good.name === val.name) {
        count = val.count;
      }
    });
    return (
      <div className="goodWrapper"  style={this.props.isActive ? {display:'block'}:{display:'none'}}>
        <div className="goodsDetails"  ref="goodsDetails" onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
          <div className="imgHeader">
            <img src={this.props.good.image}  alt="" />
            <div>
              <span className="iconfont icon-left-circle" onClick={this.showBlock}></span>
            </div>
          </div>
          <div className="goodContent">
            <div className="content">
              <h1 className="title">{this.props.good.name}</h1>
              <div className="extra">
                <span className="sellCount">月售{this.props.good.sellCount}份</span>
                <span className="rating">好评率{this.props.good.rating}%</span>
              </div>
              <div className="price">
                <span>￥<span className="p-price">{this.props.good.price}</span></span>
                <span v-if="food.oldPrice" className="p-floor">￥{this.props.good.oldPrice}</span>
                <div className="prizeWrapper">
                {
                  count === 0 ? 
                  <div className="addCart"  onClick={this.addFoot}>
                  <span>加入购物车</span></div> :
                  <Buy good={this.props.good}/>
                }
                </div>
              </div>
            </div>
            <div className="splict"> </div>
            <div className="goodIntroduce">
              <h1 className="title">商品介绍</h1>
              <aside>
                <p className="text">{this.props.good.info}</p>
              </aside>
            </div>
            <div className="splict"> </div>
            <div className="goodsRating">
              <h1 className="title">商品评价</h1>
              <Rating desc={this.state.desc}  selectType={this.state.selectType} onlyContent={this.state.onlyContent} ratings={this.props.good.ratings} transfrom={this.transfrom} toggleContent={this.toggleContent}/>
              <div className="ratingsContent">
              {
                this.props.good.ratings ?
                <ul>{this.ratingItem()}</ul> :
                <div className="noRating" v-if="!food.ratings || !food.ratings.length">
                  <p>暂无评价!</p>
                </div>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default connect(state => ({
  goods:state.sellerCart.sellerCart
}),
{
  addToCart
})(goodsDetail);