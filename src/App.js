import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Error from "./pages/Error";

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route exact path="/"><Home /></Route>
					<Route exact path="/rooms/"><Rooms /></Route>
					<Route exact path="/room/:stag/"><Room /></Route>
					<Route component={Error} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
