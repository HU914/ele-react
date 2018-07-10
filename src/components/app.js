import React from 'react';
import RouterView from '../Router/router';
import './App.less';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <RouterView/>
      </div>
    )
  }
}
 
export  default App;
