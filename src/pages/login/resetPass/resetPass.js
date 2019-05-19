import React from 'react';
import HeadTo from '../../../components/headTo/headTo';
import Axios from '../../../Api/Axios';
import './resetPass.less';

class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:true,
      imgUrl:'',
      head:{
        lgShow:false,
        history:this.props.history
      },
      resetData:{
        account:'',
        oldPs:'',
        newPs:'',

      }
    }
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
  }

  render() {
    return (
      <div className='rp'>
        <HeadTo name='重置密码' prop={this.state.head} />
        <div className="rp_main">
          <form onSubmit={this.submit}>
            <div className="f_warpper"> 
              <label htmlFor="account">
                账　号:
                <input type="text" id='account' />
              </label>
            </div>
            <div className="f_warpper"> 
              <label htmlFor="oldPs">
                旧密码:
                <input type="text" id='oldPs' />
              </label>
            </div>
            <div className="f_warpper"> 
              <label htmlFor="newPs">
                新密码:
                <input type="text" id='newPs' />
              </label>
            </div>
            <div className="f_warpper"> 
              <label htmlFor="againPs">
                密码:
                <input type="text" id='againPs' />
              </label>
            </div>
            <div className="f_warpper"> 
              <label htmlFor="code">
                验证码:
                <input type="text" id='code'/>
              </label>
              <div className="codeImg">
                <img src={this.state.imgUrl} alt=""/>
                <div className='codeText'>
                  <p className='toggle_img'>换一张</p>
                </div>
              </div>  
            </div>
            <div className="sub">
              <button type='submit' value='Submit' className={this.state.isLogin? 'disabled':'submit'} disabled={this.state.isLogin}>确认修改</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
 
export default ResetPass;