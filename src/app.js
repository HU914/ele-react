import React from 'react';
import RouterView from './Router/router';
import './App.less';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      self_url:true,
    }
  }
  render() {
    return (
      <div className='app'>
        <RouterView/>
      </div>
    )
  }
}
 
export  default App;
