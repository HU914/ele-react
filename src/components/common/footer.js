import React from 'react';
import {Link} from 'react-router-dom';
import './footer.less';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div><Link to='/home'className="active">
          <i className='iconfont icon-weibiaoti1'></i>
          <span>外卖</span></Link>
        </div>
        <div><Link to='/home/search' className="active">
          <i className='iconfont icon-sousuo-tianchong'></i>
          <span>搜索</span></Link>
        </div>
        <div><Link to='/home/order' className="active">
          <i className='iconfont icon-dingdan'></i>
          <span>订单</span></Link>
        </div>
        <div><Link  to='/home/user' className="active">
          <i className='iconfont icon-ai-user'></i>
          <span>我的</span></Link>
        </div>
      </div>
    )
  }
}
 
export default Footer;