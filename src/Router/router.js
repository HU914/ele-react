import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {withRouter} from 'react-router'
import home from '../components/home/home';
import login from '../components/login/login/login';
import resetPass from '../components/login/resetPass/resetPass';
import register from '../components/login/register/register';
import shop from '../components/seller/shop/shop';
import city from '../components/city/city';
import collect from '../components/collect/collect';
import Rating from '../components/rating/rating';
import '../components/common/animated/animated.less';
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