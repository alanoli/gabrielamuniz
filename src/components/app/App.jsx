import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import ScreenHome from '../../screens/home/ScreenHome';

import './App.scss';

function App() {
	return (
		<HashRouter>
			<Route exact path="/">
				<ScreenHome />
			</Route>
			<Redirect to="/" />
		</HashRouter>
	);
}

export default App;
