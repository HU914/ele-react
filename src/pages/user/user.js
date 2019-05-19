import React from 'react';
import {NavLink} from 'react-router-dom';
import './user.less';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: {
        initY: 0,
        scrollY: 0,
        recordY: 0,
        listY: [],
        warpperEL: '',
        targetEl: ''
      },    
    }
  }

  componentDidMount () {
    let scroll = this.state.scroll;
    scroll.targetEl = this.refs.user;
    scroll.warpperEL = this.refs.userPage;
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
    let scroll = this.state.scroll;
    let recordY = scroll.recordY; 
    scroll.initY = Math.ceil(event.changedTouches[0].clientY) + Math.abs(recordY)
    this.setState(scroll);
  }

  startScroll (event) {
    let scroll = this.state.scroll;
    let moveElm = this.state.scroll.targetEl;
    scroll.scrollY = scroll.recordY =  Math.ceil(event.changedTouches[0].clientY - scroll.initY)
    this.setState({
      scroll
    })
    if (scroll.scrollY < 0) {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(scroll.scrollY) + 'px';
    } else {
      moveElm.style.transition = 'none';
      moveElm.style.top = Math.ceil(scroll.scrollY) + 'px';
    }
  }

  entScroll () {
    let scroll = this.state.scroll;
    let moveElm = this.state.scroll.targetEl;
    if (scroll.scrollY < 0) {
      let YY = scroll.warpperEL.clientHeight - moveElm.scrollHeight;
      if (Math.abs(scroll.scrollY) >= Math.abs(YY)) {
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

  render() { 
    return (
      <div className='userPage' ref='userPage'>
        <div className="user"  ref='user' onTouchStart={(event) =>this.onlineScroll(event)} onTouchMove={(event) =>this.onlineScroll(event)} onTouchEnd={(event) =>this.onlineScroll(event)}>
          <div className="userBase">
            <div className='setImg'>
              <img src={require('../../images/user.png')} alt=""/>
            </div>
            <p className='money'><i className='iconfont icon-qian'> : </i>￥</p>
            <p className='bindIp'><i className='iconfont icon-dianhua'> : </i>13758965845</p>
            <p className='userName'>不羁的放纵</p>
          </div>
          <div className="collectBar">
            <div className="userNumber">
              <div className="u_number">
                <NavLink to='/collect'>
                <i className='iconfont icon-jushoucanggift'></i>
                </NavLink>
                <p><span>收藏</span></p>
              </div>
            </div>
            <div className="userNumber">
              <div className="u_number">
                <NavLink to='/Rating'>
                <i className='iconfont icon-pingjia-tianchong'></i>
                </NavLink>
                <p><span>评价</span></p>
              </div>
            </div>
            <div className="userNumber">
              <div className="u_number">
                <NavLink to=''>
                <i className='iconfont icon-zuji1'></i>
                </NavLink>
                <p><span>足迹</span></p>
              </div>
            </div>
          </div>
          <div className="userBar">
            <h5 className='title'>雨生小福利</h5>
            <div className="userServer">
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-ly_huiyuanka'></i>
                  </NavLink>
                  <p><span>会员卡</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-youhuiquan'></i>
                  </NavLink>
                  <p><span>优惠券</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-hongbao'></i>
                  </NavLink>
                  <p><span>我的红包</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-huo'></i>
                  </NavLink>
                  <p><span>会员活动</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="userBanlane">
            <img src={require('../../images/user.png')} alt=""/>
          </div>
          <div className="vipServer">
            <h5 className='title'>雨生小服务</h5>
            <div className="userServer">
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-erweima'></i>
                  </NavLink>
                  <p><span>我的二维码</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-kefu'></i>
                  </NavLink>
                  <p><span>客服中心</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-yijianfankui'></i>
                  </NavLink>
                  <p><span>发票助手</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-lianjie'></i>
                  </NavLink>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-lianjie'></i>
                  </NavLink>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-lianjie'></i>
                  </NavLink>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-lianjie'></i>
                  </NavLink>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <NavLink to=''>
                  <i className='iconfont icon-lianjie'></i>
                  </NavLink>
                  <p><span>我要合作</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default User;