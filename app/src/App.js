import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<Router>
				<Helmet>
					<meta name="theme-color" content="#D7354E" />
					<meta name="description" content="Software for exploring Unreal Engine 4-5 games' files" />
					<meta name="description" content="Software for exploring Unreal Engine 4-5 games' files" data-react-helmet="true" />
					<meta name="og:url" content="" />
					<meta name="og:site_name" content="" />
					<meta name="og:locale" content="" />
					<meta name="og:type" content="" />
					<meta name="og:title" content="" />
					<meta name="og:description" content="" />
					<meta name="og:image" content="" />
					<meta name="og:image:alt" content="" />
					<meta name="twitter:card" content="" />
					<meta name="twitter:title" content="" />
					<meta name="twitter:description" content="" />
					<meta name="twitter:image" content="" />
					<meta name="twitter:image:alt" content="" />
					<title>FModel</title>
				</Helmet>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
};

export default App;