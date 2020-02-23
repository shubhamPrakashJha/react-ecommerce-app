import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import LoginPage from "./pages/loginpage/login.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// this.setState({ currentUser: user });
			// console.log(user);
			// createUserProfileDocument(user);
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState(
						{
							currentUser: {
								id: snapshot.id,
								...snapshot.data()
							}
						},
						() => {
							console.log(snapshot, snapshot.data(), this.state);
						}
					);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route path="/shop" component={ShopPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default App;
