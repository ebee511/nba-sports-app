import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "../App.js";
import TeamDetails from './TeamDetails.js';

//Stateless functional component because no state change
const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' component={App} exact/>
			<Route path='/teamdetails/:id' component={TeamDetails}/>
		</Switch>
	</BrowserRouter>
);

export default Router;