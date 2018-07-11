import React from 'react';
import {NavLink} from 'react-router-dom';
import './headTo.less';


class HeadTo extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }
  
  render() {
    let h_r;
    if (this.props.show) {
      h_r = <div className='h_r' ><span className='r_l'><NavLink exact  to='/home'>登录</NavLink></span>
            <span className='r_r'><NavLink to='/login'>注册</NavLink></span></div>;
    } else {
      h_r = '';
    }
    return (
      <div className='headTo'>
        <div className='h_l' onClick={this.goBack}>
          {/* <NavLink to=''> */}
            <i className='iconfont icon-left-circle'></i>
          {/* </NavLink> */}
        </div>
          <div className='h_c'>
            <span>{this.props.name}</span>
          </div>
        {h_r}
      </div>
    )
  }
}
 
export default HeadTo;