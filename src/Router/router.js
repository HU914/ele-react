import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import home from '../components/home/home';
import login from '../components/login/login';
import resetPass from '../components/login/resetPass';
import shop from '../components/seller/shop/shop';

class MyRouter extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/home" component={home} />
          <Route path="/login" component={login} />
          <Route path="/shop" component={shop} />
          <Route path="/resetPass" component={resetPass} />
          <Redirect from='/' to='/home' />
        </Switch>
      </main>
    )
  }
}

export default MyRouter;