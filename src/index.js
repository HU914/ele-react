import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import './Api/rem';
import './base.less';
import store from './store/store';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    { <Router><App/></Router> }
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();

