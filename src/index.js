import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import './components/base.less';
import './Api/rem';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import './store'


ReactDOM.render(
  <Provider store={store}>
    { <Router><App/></Router> }
  </Provider> ,
  document.getElementById('root')
);
registerServiceWorker();