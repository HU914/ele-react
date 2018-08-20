import React from 'react';
import {NavLink} from 'react-router-dom';
import './footer.less';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div><NavLink exact to='/home'>
          <i className='iconfont icon-weibiaoti1'></i>
          <span>外卖</span></NavLink>
        </div>
        <div><NavLink to='/home/search'>
          <i className='iconfont icon-sousuo-tianchong'></i>
          <span>搜索</span></NavLink>
        </div>
        <div><NavLink to='/home/order'>
          <i className='iconfont icon-dingdan'></i>
          <span>订单</span></NavLink>
        </div>
        <div><NavLink  to='/home/user'>
          <i className='iconfont icon-ai-user'></i>
          <span>我的</span></NavLink>
        </div>
      </div>
    )
  }
}
 
export default Footer;