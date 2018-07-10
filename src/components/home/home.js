import React from 'react';
import {Route} from 'react-router-dom';
import HeadTo from '../common/headTo';
import Footer from '../common/footer';
import search from '../search/search';
import goods from '../goods/goods';

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
      <Route exact  path='/home' component={goods} />
      <Route path='/home/search' component={search} />
      <Footer/>
      </div>
    )
  }
}
 
export  default Login;
