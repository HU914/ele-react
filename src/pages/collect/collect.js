import React, { Component } from 'react'
import {NavLink,Route,Switch} from 'react-router-dom';
import HeadTo from '../../components/headTo/headTo';
import Shop from './shop/shop';
import Good from './good/good';
import './collect.less';

class Collect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head:{
        lgShow:true,
        position:false,
        go:'/home/user',
        history:this.props.history
      },
    }
  }
  render() { 
    return (
      <div className="collect">
        <HeadTo name='收藏' prop={this.state.head} />
        <div className="c_nav">
          <span className='n_bar'>
            <NavLink exact to='/collect'>店铺</NavLink>
          </span>
          <span className='n_bar'>
            <NavLink to='/collect/good'>商品</NavLink>
          </span>
        </div>
          <Switch>
            <Route exact path='/collect' component={Shop} />
            <Route path='/collect/good' component={Good} />
          </Switch>
      </div>
    );
  }
}
 
export default Collect;