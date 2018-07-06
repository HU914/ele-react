import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/headTo.less';


class HeadTo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='headTo'>
        <div className='h_l'>
          <i className='iconfont icon-left-circle'></i>
        </div>
        <div className='h_c'>
          <span>{this.props.name}</span>
        </div>
        <div className='h_r'>
          <span className='r_l'><NavLink exact  to='/home'>登录</NavLink></span>
          <span className='r_r'><NavLink to='/'>注册</NavLink></span>
        </div>
      </div>
    )
  }
}
 
export default HeadTo;