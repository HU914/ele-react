import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,BrowserHistory} from 'react-router-dom'
import './tools/rem';
import App from './components/app';
import './styles/base.less';


<<<<<<< HEAD



fetch(
	'http://106.12.22.19',
	{
		method: 'GET'
	}
).then( _ => _.text() ).then( res => {
	console.log(11111,res,11111111)
})

=======
>>>>>>> 重置密码初始化
// Render the main component into the dom
ReactDOM.render(<Router history={BrowserHistory}><App/></Router>, document.getElementById('app'));
