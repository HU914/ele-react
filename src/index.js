import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './styles/base.less';
import './tools/rem';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
