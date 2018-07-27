import React from 'react';
import {Link} from 'react-router-dom';
import HeadTo from '../../common/headTo/headTo';
import Axios from '../../../Api/Axios';
import './register.less';
 
class Register extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isActive:true,
      isLogin:false,
      userData:{username:'',password:'',s_code:''},
      head:{
        lgShow:false,
        history:this.props.history
      },
      imgUrl:''
    };

    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.changText = this.changText.bind(this);
    this.initData =  this.initData.bind(this);
  }

  componentDidMount () {
    this.initImg();
  }

  initImg = async () => {
    try{
      let result = await Axios.verifyImg();
      this.setState(preState => ({
        imgUrl:result.data.code
      }));
    }catch(err){
      console.error(err);
    }
  }

  cutterImg () {
    this.initImg();
  }

  submit (event) {
    event.preventDefault();
    this.initData();
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
      let result = await Axios.userlLogin({data:this.state.userData});
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
        <HeadTo name='注册' prop={this.state.head}/>
        <div className="lr_main">
          <form onSubmit={this.submit}>
            <div className='f_warpper'>
              <label htmlFor='username'>
                账　号 :
                <input type="text" autoFocus="autoFocus" value={this.state.userData.username} name='username' onChange={this.changText} />
              </label>
            </div>
            <div className='f_warpper'>
              <label htmlFor='password'>
                密　码 :
                <input type={this.state.isActive ? 'password' : 'text'} value={this.state.userData.password} name='password' onChange={this.changText} />
              </label>
              <div className="togg_warpper" >
                <i className={this.state.isActive ? 'toggle psHidden': 'toggle'} onClick={this.toggle}></i>
                <span className={this.state.isActive ? 'show_hidden showPs': 'show_hidden'}>abc<span>...</span></span>
              </div>
            </div>
            <div className='f_warpper'>
              <label htmlFor='s_code'>
                验证码 :
                <input  className='s_code' type="text" value={this.state.userData.s_code} name='s_code' onChange={this.changText} />
              </label>
              <div className="codeImg">
                <img src={this.state.imgUrl} alt=""/>
                <div className='codeText'>
                  <p className='toggle_img' onClick={this.cutterImg.bind(this)}>换一张</p>
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
        </div>
      </div>
    )
  }
}
 

export default Register
