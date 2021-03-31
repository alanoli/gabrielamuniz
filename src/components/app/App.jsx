import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import ScreenHome from '../../screens/home/ScreenHome';

import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<ScreenHome />
			</Route>
			<Redirect to="/" />
		</BrowserRouter>
	);
}

export default App;
