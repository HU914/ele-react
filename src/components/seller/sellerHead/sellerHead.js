import React,{Component} from 'react'
import './sellerHead.less';

class SellerHead extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="header">
      <div className="content">
        <div className="avatar">
          <img src={require('../../../images/captcha.png')} alt="" />
        </div>
        <div className="c-content">
           <div className="title">
             <span className="brand"></span>
             <span className="name"></span>
           </div>
           <div className="description">
             蜂鸟专送 / 20分钟送达
           </div>
           <div className="supports">
             {/* <span className="icon" :className="classNameMap[seller.supports[0].type]"></span> */} */}
             <span className="text">在线支付满28减5</span>
           </div>
        </div>
        <div className="count" >
          <span className="sum">5个</span>
          <i className="icon iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
      <div className="banner" >
        <span className="bannerImg"></span>
        <span className="bannerText">分的司法考试放得开即可</span>
        <i className="bannerIcon iconfont icon-xiangyoujiantou"></i>
      </div>
      <div className="background">
        <img src={require('../../../images/captcha.png')} alt=""/>
      </div>
       {/* <transition  enter-active-className="animated zoomInDown" leave-active-className="animated bounceOutRight" > */}
         <div v-show="detailShow" className="detail">
           <div className="c_warp" >
             <div className="c_c">
               {/* <h1 className="name"></h1> */}
               <div className="star-warp">
                 {/* <star :size="48" :score="seller.score"></star> */}
               </div>
               <div className="info">
                 <p>优惠信息</p>
               </div>
               {/* <ul className="supports">
                 <li className="supports-item>
                 </li>
               </ul> */}
               <div className ="">
                 <p>商家公告</p>
               </div>
               <div className="s_in">
                 <p></p>
               </div>
             </div>
           </div>
           <div className="detailColse">
             <span className=" icon iconfont icon-close" ></span>
             </div>
         </div>
       {/* </transition> */}
     </div>
    );
  }
}
 
export default SellerHead;