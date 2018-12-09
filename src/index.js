import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './components/Router.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
	<Router/>
	), document.getElementById('root')
);

serviceWorker.register();
