import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {addToCart,addTT} from '../../store/cart/actions';
import HeadTo from '../common/headTo';
import Axios from '../../Api/Axios';
import './login.less';
 
/* @connect(                                //使用插件解析connect
  state =>({obj:state.buyCart}),
  {addToCart}
) */
class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isActive:true,
      isLogin:false,
      userData:{account:'',password:'',s_code:''},
      head:{
        lgShow:false,
        history:this.props.history
      }
    };

    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changText = this.changText.bind(this);
    this.initData =  this.initData.bind(this);
  }
  submit (event) {
    event.preventDefault();
    this.initData();
   this.props.addToCart('ff','ddd',54545);
   this.props.addTT(2324);
  }
  binds (parme) {
    this[parme] = this[parme].bind(this);
  }
  changText (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let userData = this.state.userData;
    userData[name] = value;
    this.setState(userData);
  }
  initData = async () => {
    try{
      let result = await Axios.userlLogin({data:{}});
      console.log(result);
    }catch(err){
      console.error(err);
    }
  }
  toggle () {
    this.setState(preState => ({
      isActive:!preState.isActive
    }));
  }
  render() {

    return (
      <div className="lr">
        <HeadTo name='登录' prop={this.state.head}/>
        <div className="lr_main">
          <form  id='userData' onSubmit={this.submit}>
            <div className='f_warpper'>
              <label htmlFor='account'>
                账　号 :
                <input id='account' type="text" autoFocus="autoFocus" value={this.state.userData.account} name='account' onChange={this.changText} />
              </label>
            </div>
            <div className='f_warpper'>
              <label htmlFor='password'>
                密　码 :
                <input id='password' type={this.state.isActive ? 'password' : 'text'} value={this.state.userData.password} name='password' onChange={this.changText} />
              </label>
              <div className="togg_warpper" >
                <i className={this.state.isActive ? 'toggle psHidden': 'toggle'} onClick={this.toggle}></i>
                <span className={this.state.isActive ? 'show_hidden showPs': 'show_hidden'}>abc<span>...</span></span>
              </div>
            </div>
            <div className='f_warpper'>
              <label htmlFor='s_code'>
                验证码 :
                <input id='s_code' type="text" value={this.state.userData.s_code} name='s_code' onChange={this.changText} />
              </label>
              <div className="codeImg">
                <img src={"http://106.12.22.19/user/imagecode/"} alt=""/>
                <div className='codeText'>
                  <p className='toggle_img'>换一张</p>
                </div>
              </div>
            </div>
            <div className="tip">
              <p>温馨提示：未注册过的账号，登录时将自动注册</p>
              <p>注册过得用户可凭账号密码登录</p>
            </div>
            <div className="sub">
              <button type='submit' value='Submit' className={this.state.isLogin? 'disabled':'submit'} disabled={this.state.isLogin}>登录</button>
            </div>
          </form>
          <div className="resetPass">
            <Link to='/resetPass' className='reset'>重置密码?</Link>
          </div>
          {console.log(this.props.cart)}
        </div>
      </div>
    )
  }
}
 

// connect 的原生用法，这里赋值的是 reducers的方法
export default connect(state => ({
  cart:state.buyCart
}), {
  addToCart,
  addTT
})(Login);