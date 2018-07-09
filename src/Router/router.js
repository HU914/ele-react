import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import home from '../components/home/home';
import login from '../components/login/login';

class MyRouter extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route   path="/home" component={home} />
          <Redirect from='/' to='/home' />
        </Switch>
      </main>
    )
  }
}

export default MyRouter;