import React from 'react';
import {Route} from 'react-router-dom';
import HeadTo from '../../components/headTo/headTo';
import Footer from '../../components/footer/footer';
import search from '../search/search';
import seller from '../seller/seller';
import user from '../user/user';
import Shade from '../../components/shade/shade';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shade: true,
      head: {
        lgShow: true,
        position: false,
        history: this.props.history
      },
    };
  }
  componentDidMount () {
    this.setState({shade: false});  
  }
  componentDidUpdate () {
    window.addEventListener('scroll',() => {
      let head = document.querySelector('.headTo');
      let scroll = document.body.scrollTop || document.documentElement.scrollTop;
      if (scroll > 0) {
        head.style.zIndex =4;
      } else {
        head.style.zIndex = '';
      }
    });
  }
  

  

  render() {
    return (
      <div className='home' onClick={this.tt} ref='home'>
        <HeadTo name='' prop={this.state.head}/>
          <Route exact  path='/home' component={seller} />
          <Route path='/home/search' component={search} />
          <Route path="/home/user" component={user} />
        <Footer/>
        {this.state.shade ? <Shade/> : ''}
      </div>
    )
  }
}
 
export  default Login;
