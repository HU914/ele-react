import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {recordSite} from '../../store/cart/actions';
import './headTo.less';
import Axios from '../../Api/Axios';









class HeadTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site:''
    }
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    if (!this.props.site) {    
      fetch('https://restapi.amap.com/v3/ip?key=c046c759166dd4603eb59c5091d98e52').then((res)=>{
        if(res.ok){
          res.text().then((data)=>{
            const detail=JSON.parse(data)
            this.props.recordSite(detail.city)
          })
        }
      }).catch((res)=>{
        console.log(res.status);
      })
    }
  }
  getSitie = async () => {
    try {
      let result = await Axios.getSite();
      console.log(result);
    }
    catch(err) {
      console.log(err);
    }
  }

  goBack() {
    this.props.prop.history.goBack();
  }
  
  render() {
    return (
      <div className={this.props.prop.position ? 'headTo headToggle' : 'headTo'}>
        <div className='h_l'>
          {
            this.props.prop.go ? 
            <Link to={this.props.prop.go}><i className='iconfont icon-left-circle'></i></Link>
            :  this.props.prop.go ? <i className='iconfont icon-left-circle' onClick={this.goBack}></i>
            : 
            <NavLink to='/city'>
              <i className='iconfont icon-dizhi'></i>
              <span className='site'>{this.props.site}</span>
            </NavLink>
          }
          
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
            this.props.log ? '': <div className='h_r' ><span className='r_l'><NavLink exact  to='/login'>登录</NavLink></span>
            <span className='r_r'><NavLink to='/register'>注册</NavLink></span></div>
          }
      </div>
    ) 
  }
}
 
export default connect(state =>({
  site:state.site.site,
  log:state.log.log
}), {
  recordSite
})(HeadTo)