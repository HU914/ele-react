import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {withRouter} from 'react-router'
import home from '../pages/home/home';
import login from '../pages/login/login/login';
import resetPass from '../pages/login/resetPass/resetPass';
import register from '../pages/login/register/register';
import shop from '../pages/seller/shop/shop';
import city from '../pages/city/city';
import collect from '../pages/collect/collect';
import Rating from '../pages/rating/rating';
import '../components/animated/animated.less';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class MyRouter extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      self_url:true,
    }
  }

  componentWillMount() {
    this.props.history.listen((location,action) => {
      if (this.props.location.pathname === location.pathname) {
        this.setState({
          self_url:true
        })
      }
    })
  }

  componentDidUpdate () {
    if (this.state.self_url) {
      this.setState({
        self_url:false
      })
    }
  }


  render() {
    return (
      <Route children={ ({ location }) => {
        return (
        <TransitionGroup>
          <CSSTransition
          key={ location.key } 
          classNames={!this.state.self_url ? "fadeInRight" : ''}
          timeout={ 800 }
          >
            <main>
              <Switch>
                <Route path="/home" component={home} />
                <Route path="/login" component={login} />
                <Route path="/shop" component={shop} />
                <Route path="/city" component={city} />
                <Route path="/resetPass" component={resetPass} />
                <Route path="/register" component={register} />
                <Route path="/collect" component={collect} />
                <Route path="/Rating" component={Rating} />
                <Redirect from='/' to='/city' />
              </Switch>
            </main>
        </CSSTransition>
      </TransitionGroup>
    )
     }} /> 
  )
  }
}

export default withRouter(MyRouter);