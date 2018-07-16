import React from 'react';
import './home.less';
import {Route} from 'react-router-dom';
import HeadTo from '../common/headTo/headTo';
import Footer from '../common/footer/footer';
import search from '../search/search';
import seller from '../seller/seller';
import user from '../user/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head:{
        lgShow:true,
        position:false,
        history:this.props.history
      }
    };
  }
  componentDidUpdate() {
    this._isMounted = true;
    window.addEventListener('scroll',() => {
      let head = document.querySelector('.headTo');
      let scroll = document.body.scrollTop || document.documentElement.scrollTop;
      if (scroll > 0) {
        head.style.zIndex =2;
      } else {
        head.style.zIndex = '';
      }
    });
  }

  

  render() {
    return (
      <div className='home' onClick={this.tt}>
      <HeadTo name='' prop={this.state.head}/>
      <div className="h_main" >
        <Route exact  path='/home' component={seller} />
        <Route path='/home/search' component={search} />
        <Route path="/home/user" component={user} />
      </div>
      <Footer/>
      </div>
    )
  }
}
 
export  default Login;
