import React from 'react';
import {Link} from 'react-router-dom';
import './footer.less';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div><Link to='/home'>
          <i className='iconfont icon-shouye'></i>
          <span>外卖</span></Link>
        </div>
        <div><Link to='/home/search'>
          <i className='iconfont icon-sousuo'></i>
          <span>搜索</span></Link>
        </div>
        <div><Link to='/home/order'>
          <i className='iconfont icon-wodedingdan'></i>
          <span>订单</span></Link>
        </div>
        <div><Link  to='/home/user'>
          <i className='iconfont icon-wodejuhuasuan'></i>
          <span>我的</span></Link>
        </div>
      </div>
    )
  }
}
 
export default Footer;