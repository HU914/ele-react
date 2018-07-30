import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './headTo.less';


class HeadTo extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.prop.history.goBack();
  }
  
  render() {
    console.log(this.props.site);
    return (
      <div className={this.props.prop.position ? 'headTo headToggle' : 'headTo'}>
        <div className='h_l' onClick={this.goBack}>
          <i className='iconfont icon-left-circle'></i>
        </div>
          <div className='h_c'>
            {
              this.props.prop.city ? <div className='search'>
                <i className='iconfont icon-sousuo'></i>
                <input type="text" className='s_inp' placeholder='搜索'/>
              </div> : <span>{this.props.name}</span>
            }
          </div>
          {
            this.props.prop.log ? <div className='h_r' >
              <NavLink to='/city'>
                <i className='iconfont icon-dizhi'></i>
                <span className='site'>{this.props.site}</span>
              </NavLink>
            </div> : <div className='h_r' ><span className='r_l'><NavLink exact  to='/login'>登录</NavLink></span>
            <span className='r_r'><NavLink to='/register'>注册</NavLink></span></div>
          }
      </div>
    )
  }
}
 
export default connect(state =>({
  site:state.site.site,
  log:state.log.log
}))(HeadTo)