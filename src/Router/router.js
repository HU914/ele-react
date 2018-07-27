import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import home from '../components/home/home';
import login from '../components/login/login/login';
import resetPass from '../components/login/resetPass/resetPass';
import register from '../components/login/register/register';
import shop from '../components/seller/shop/shop';
import '../components/common/animated/animated.less';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class MyRouter extends React.Component {
  render() {
    return (
      <Route children={ ({ location }) => {
        return (
        <TransitionGroup>
          <CSSTransition
          key={ location.key } 
          classNames="fadeInRight" 
          timeout={ 800 }
          >
            <main>
              <Switch>
                <Route path="/home" component={home} />
                <Route path="/login" component={login} />
                <Route path="/shop" component={shop} />
                <Route path="/resetPass" component={resetPass} />
                <Route path="/register" component={register} />
                <Redirect from='/' to='/home' />
              </Switch>
            </main>
        </CSSTransition>
      </TransitionGroup>
    )
     }} /> 
  )
  }
}

export default MyRouter;