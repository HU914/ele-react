import React from 'react';
import {Route,Switch} from 'react-router-dom';
import home from '../components/home/home';
import login from '../components/login/login';

class MyRouter extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={login} />
          <Route   path="/home" component={home} />
        </Switch>
      </main>
    )
  }
}

export default MyRouter;