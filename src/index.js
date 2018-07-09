import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';



console.log( fetch )
fetch(
	'http://106.12.22.19',
	{}
).then( res => {
	console.log(res)
})
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
