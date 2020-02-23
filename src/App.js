import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import LoginPage from "./pages/loginpage/login.component";
import Header from "./components/header/header.component";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/shop" component={ShopPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
