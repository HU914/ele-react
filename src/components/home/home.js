import React from 'react';
import './home.less';
import {Route} from 'react-router-dom';
import HeadTo from '../common/headTo';
import Footer from '../common/footer';
import search from '../search/search';
import goods from '../goods/goods';
import user from '../user/user';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head:{
        lgShow:true,
        history:this.props.history
      }
    };
  }
  render() {
    return (
      <div className='home'>
      <HeadTo name='tt' show={this.state.head.lgShow} history={this.state.head.history} />
      <div className="h_main">
        <Route exact  path='/home' component={goods} />
        <Route path='/home/search' component={search} />
        <Route path="/home/user" component={user} />
      </div>
      <Footer/>
      </div>
    )
  }
}
 
export  default Login;
