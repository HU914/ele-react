import React from 'react';
import HeadTo from '../common/headTo';
import '../../styles/login.less';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:{account:'',password:'',code:''},
      isActive:true,
      lgShow:false
    };
    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changText = this.changText.bind(this);
  }
  submit (event) {
    event.preventDefault();
  }

  changText (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let userData = this.state.userData;
    userData[name] = value;
    this.setState(userData);
  }

  toggle () {
    this.setState(preState => ({
      isActive:!preState.isActive
    }));
  }
  render() {
    return (
      <div className="lr">
        <HeadTo name='登录' show={this.state.lgShow} />
        <div className="lr_main">
          <form  id='userData' onSubmit={this.submit}>
            <div className='f_warpper'>
              <lable>
                账　号 :
                <input id='account' type="text" autoFocus="autoFocus" value={this.state.userData.account} name='account' onChange={this.changText} />
              </lable>
            </div>
            <div className='f_warpper'>
              <lable>
                密　码 :
                <input id='password' type={this.state.isActive ? 'password' : 'text'} value={this.state.userData.password} name='password' onChange={this.changText} />
              </lable>
              <div className="togg_warpper" >
                <i className={this.state.isActive ? 'toggle psHidden': 'toggle'} onClick={this.toggle}></i>
                <span className={this.state.isActive ? 'show_hidden showPs': 'show_hidden'}>abc<span>...</span></span>
              </div>
            </div>
            <div className='f_warpper'>
              <lable>
                验证码 :
                <input id='code' type="text" value={this.state.userData.code} name='code' onChange={this.changText} />
              </lable>
              <div className="codeImg">
                <img src="../../images/captcha.png" alt=""/>
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
              <button type='submit' value='Submit' className='submit'>登录</button>
            </div>
          </form>
          <div className="resetPass">
            <span>重置密码?</span>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Login;