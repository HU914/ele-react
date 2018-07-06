import React from 'react';
import RouterView from '../Router/router';
import '../styles/App.less';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RouterView/>
      </div>
    )
  }
}
 
export  default Login;
