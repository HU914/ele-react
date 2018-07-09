import React from 'react';
import RouterView from '../Router/router';
import '../styles/App.less';

class app extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='app'>
        <RouterView/>
      </div>
    )
  }
}
 
export  default app;
