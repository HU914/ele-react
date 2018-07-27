import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import './sellerHead.less';
import '../../common/animated/animated.less';
import SellerDetail from './sellerDetail';

class SellerHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoodsDetail:false,
      classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
    this.showGoodsDetail = this.showGoodsDetail.bind(this);
  }

  showGoodsDetail () {
    this.setState(preState => ({
      isGoodsDetail:!preState.isGoodsDetail
    }))
  }
  render() { 
    return (
      <div className="header">
        <div className="h_title">
          <div className='h_back'>
            <NavLink to='/home'>
              <i className='iconfont icon-left-circle'></i>
            </NavLink>
          </div>

        </div>
      <div className="content">
        <div className="avatar">
          <img src={require('../../../images/captcha.png')} alt="" />
        </div>
        <div className="c-content">
           <div className="title">
             <span className="brand"></span>
             <span className="name">大白粥</span>
           </div>
           <div className="description">
             蜂鸟专送 / 20分钟送达
           </div>
           <div className="supports" >
             <span className={"icon " + this.state.classMap[0]}></span>
             <span className="text">在线支付满28减5</span>
           </div>
        </div>
        <div className="count" onClick={this.showGoodsDetail}>
          <span className="sum">5个</span>
          <i className="icon iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
      <div className="banner" onClick={this.showGoodsDetail}>
        <span className="bannerImg"></span>
        <span className="bannerText">分的司法考试放得开即可</span>
        <i className="bannerIcon iconfont icon-xiangyoujiantou"></i>
      </div>
      <div className="background">
        <img src={require('../../../images/captcha.png')} alt=""/>
      </div>
       <CSSTransition 
        in={this.state.isGoodsDetail}
        classNames="fadeInTopO" 
        timeout={500}
        unmountOnExit
        >
          <SellerDetail showGoodsDetail={this.showGoodsDetail}  isActive={this.state.isGoodsDetail} privilege={this.props.privilege}/>
        </CSSTransition>
     </div>
    );
  }
}
 
export default SellerHead;