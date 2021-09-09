import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div className='w-full'>
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
						{/* real pages */}
						<Route exact path="/" component={Home} />
						<Route exact path="/docs" component={Documentation} />

						{/* redirects */}
						<Route exact path="/discord" component={() => {
							window.location.replace('https://discord.gg/fdkNYYQ');
							return null;
						}} />
						<Route exact path="/donate" component={() => {
							window.location.replace('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EP9SSWG8MW4UC&source=url');
							return null;
						}} />
						<Route exact path="/download" component={() => {
							window.location.replace('https://github.com/iAmAsval/FModel/releases/latest/download/FModel.zip');
							return null;
						}} />
						<Route exact path="/github" component={() => {
							window.location.replace('https://github.com/iAmAsval/FModel');
							return null;
						}} />

						{/* 404 */}
						<Route component={NotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
};

export default App;