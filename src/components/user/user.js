import React from 'react';
import './user.less';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <div className="user">
          <div className="userBase">
            <div className='setImg'>
              <img src={require('../../images/user.png')} alt=""/>
            </div>
            <p className='userName'>不羁的放纵</p>
          </div>
          <div className="collectBar">
            <div className="userNumber">
              <div className="u_number">
                <i className='iconfont icon-jushoucanggift'></i>
                <p><span>收藏</span></p>
              </div>
            </div>
            <div className="userNumber">
              <div className="u_number">
                <i className='iconfont icon-pingjia-tianchong'></i>
                <p><span>评价</span></p>
              </div>
            </div>
            <div className="userNumber">
              <div className="u_number">
                <i className='iconfont icon-zuji1'></i>
                <p><span>足迹</span></p>
              </div>
            </div>
          </div>
          <div className="userBar">
            <h5 className='title'>雨生小福利</h5>
            <div className="userServer">
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-ly_huiyuanka'></i>
                  <p><span>会员卡</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-youhuiquan'></i>
                  <p><span>优惠券</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-hongbao'></i>
                  <p><span>我的红包</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-huo'></i>
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
                  <i className='iconfont icon-erweima'></i>
                  <p><span>我的二维码</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-kefu'></i>
                  <p><span>客服中心</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-yijianfankui'></i>
                  <p><span>发票助手</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-lianjie'></i>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-lianjie'></i>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-lianjie'></i>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-lianjie'></i>
                  <p><span>我要合作</span></p>
                </div>
              </div>
              <div className="userNumber">
                <div className="u_number">
                  <i className='iconfont icon-lianjie'></i>
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