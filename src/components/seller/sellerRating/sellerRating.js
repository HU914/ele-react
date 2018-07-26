import React, { Component } from 'react';
import Star from '../../common/star/star';
import Rating from '../../common/rating/rating';
import './sellerRating.less';

class SellerRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initY: 0,
      scrollY: 0,
      selectType: 2,
      onlyContent: false,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      },
      scroll: {
        scrollY: 0,
        recordY: 0,
        listY: [],
        el: this.refs.ratingsConent,
        cls: '.ratingsConent'
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
      ratings: [
        {
          "username": "3******c",
          "rateTime": 1469281964000,
          "deliveryTime": 30,
          "score": 5,
          "rateType": 0,
          "text": "不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": [
            "南瓜粥",
            "皮蛋瘦肉粥",
            "扁豆焖面",
            "娃娃菜炖豆腐",
            "牛肉馅饼"
          ]
        },
        {
          "username": "2******3",
          "rateTime": 1469271264000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "服务态度不错",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": [
            "扁豆焖面"
          ]
        },
        {
          "username": "3******b",
          "rateTime": 1469261964000,
          "score": 3,
          "rateType": 1,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "1******c",
          "rateTime": 1469261864000,
          "deliveryTime": 20,
          "score": 5,
          "rateType": 0,
          "text": "良心店铺",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "2******d",
          "rateTime": 1469251264000,
          "deliveryTime": 10,
          "score": 4,
          "rateType": 0,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "9******0",
          "rateTime": 1469241964000,
          "deliveryTime": 70,
          "score": 1,
          "rateType": 1,
          "text": "送货速度蜗牛一样",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "d******c",
          "rateTime": 1469231964000,
          "deliveryTime": 30,
          "score": 5,
          "rateType": 0,
          "text": "很喜欢的粥店",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "2******3",
          "rateTime": 1469221264000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "量给的还可以",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "3******8",
          "rateTime": 1469211964000,
          "deliveryTime": "",
          "score": 3,
          "rateType": 1,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "a******a",
          "rateTime": 1469201964000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "孩子喜欢吃这家",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": [
            "南瓜粥"
          ]
        },
        {
          "username": "3******3",
          "rateTime": 1469191264000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "粥挺好吃的",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "t******b",
          "rateTime": 1469181964000,
          "deliveryTime": "",
          "score": 3,
          "rateType": 1,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "f******c",
          "rateTime": 1469171964000,
          "deliveryTime": 15,
          "score": 5,
          "rateType": 0,
          "text": "送货速度很快",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "k******3",
          "rateTime": 1469161264000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "u******b",
          "rateTime": 1469151964000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "下雨天给快递小哥点个赞",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "s******c",
          "rateTime": 1469141964000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "好",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "z******3",
          "rateTime": 1469131264000,
          "deliveryTime": 38,
          "score": 5,
          "rateType": 0,
          "text": "吃了还想再吃",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "n******b",
          "rateTime": 1469121964000,
          "deliveryTime": 42,
          "score": 3,
          "rateType": 1,
          "text": "发票开的不对",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "m******c",
          "rateTime": 1469111964000,
          "deliveryTime": 30,
          "score": 5,
          "rateType": 0,
          "text": "好吃",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "l******3",
          "rateTime": 1469101264000,
          "deliveryTime": 40,
          "score": 5,
          "rateType": 0,
          "text": "还不错吧",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "3******o",
          "rateTime": 1469091964000,
          "deliveryTime": "",
          "score": 2,
          "rateType": 1,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "3******p",
          "rateTime": 1469081964000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "很喜欢的粥",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "o******k",
          "rateTime": 1469071264000,
          "deliveryTime": "",
          "score": 5,
          "rateType": 0,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        },
        {
          "username": "k******b",
          "rateTime": 1469061964000,
          "deliveryTime": "",
          "score": 4,
          "rateType": 0,
          "text": "",
          "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
          "recommend": []
        }
      ]
    }
    this.transfrom = this.transfrom.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
  }

  componentDidMount () {
    let scroll = this.state.scroll;
    scroll.el = this.refs.ratingsConent;
    this.setState({
      scroll
    })
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

  transfrom (type) {
    this.setState({selectType : type});   // 设置评价组件 评价类型
  }

  toggleContent () {
    this.setState(preState => ({         // 切换 有内容和无内容 评价的 状态码
      onlyContent:!preState.onlyContent
    }))
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

  recommendGood (val) {
    return val.map ((item, index) => {
      return (
        <li className="recommendItem"  key={index}>
          <span>{item}</span>
        </li>
      )
    })
  }

  ratingItem() {                // 评价 view
    let rating;
    rating = this.state.ratings.map((item, index) => {
      let data = new Date(item.rateTime);
      let userRating = '';
      if (this.needShow(item.rateType,item.text)) {
        if (!item.text){ userRating = <p v-if="!item.text">此用户没有评价</p>;}
        return (
          <li  className="ratingItem"  key={index}>
            <span className="userImg">
              <img src={item.avatar} alt =''/>
            </span>
            <div className="ratingWrapper">
              <div className="fistTexrt">
                <span className="userInfo">{item.username}</span>
                <span className="time">{this.formatDate(data,'yyyy-MM-dd hh:mm:ss')}</span>
              </div>
              <div className="gradeContent">
                <Star size='24' score={item.score}></Star>
                <span className="deliveryTime">{item.deliveryTime}分钟送达</span>
              </div>
              <div className="ratingText">
                <p>{item.text}</p>
                  {userRating}
              </div>
              <div className="ratingTag">
                <i  className={"iconfont " + (this.itive(item) ? 'icon-zan4' : 'icon-zan')}></i>
                <ul>
                  {this.recommendGood(item.recommend.slice(0,2))}
                </ul>
              </div>
            </div>
          </li>
        )
      }
      return '';
      })
    return rating;
  }

  render() {
    return (
      <div className="ratings">
      <div className="ratingsConent" ref="ratingsConent" onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
        <div className="overview">
          <div className="overviewLeft">
            <p className="grade">{this.state.seller.score}</p>
            <p className="gradeText">综合评分</p>
            <p className="gradeDescribe">高于周边商家{this.state.seller.rankRate}%</p>
          </div>
          <div className="overviewRight">
            <div className="gradeLevel">
              <span className="title">服务态度</span>
              <Star size='36' score={this.state.seller.serviceScore}></Star> 
              <span className="gradeNum">{this.state.seller.serviceScore}</span>
            </div>
            <div className="gradeLevel">
              <span className="title">商品评分</span>
              <Star size='36' score={this.state.seller.foodScore}></Star>
              <span className="gradeNum">{this.state.seller.foodScore}</span>
            </div>
            <p className="gradeLevel">
              <span className="title">送达时间</span>
              <span className="gradeTime">{this.state.seller.deliveryTime}分钟</span>
            </p>
          </div>
        </div>
        <div className="splict"> </div>
        <Rating desc={this.state.desc}  selectType={this.state.selectType} onlyContent={this.state.onlyContent} ratings={this.state.ratings} transfrom={this.transfrom} toggleContent={this.toggleContent}/>
        <div className="ratingsList">
          {
            this.state.ratings ?
            <ul>{this.ratingItem()}</ul> :
            <div className="noRating">
              <p>暂无评价!</p>
            </div>
          }
        </div>
      </div>
    </div>
    );
  }
}
 
export default SellerRating;