import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './tools/rem';
import App from './components/app';
import './styles/base.less';





console.log( fetch )
fetch(
	'http://106.12.22.19',
	{}
).then( res => {
	console.log(res)
})
// Render the main component into the dom
ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
