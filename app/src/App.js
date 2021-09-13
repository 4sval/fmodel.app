import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import NotFound from './pages/NotFound';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<Router>
				<Switch>
					{/* real pages */}
					<Route exact path='/' component={Home} />
					<Route exact path='/docs' component={Documentation} />

					{/* redirects */}
					<Route exact path='/discord' component={() => {
						window.location.replace('https://discord.gg/fdkNYYQ');
						return null;
					}} />
					<Route exact path='/donate' component={() => {
						window.location.replace('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EP9SSWG8MW4UC&source=url');
						return null;
					}} />
					<Route exact path='/download' component={() => {
						window.location.replace('https://github.com/iAmAsval/FModel/releases/latest/download/FModel.zip');
						return null;
					}} />
					<Route exact path='/github' component={() => {
						window.location.replace('https://github.com/iAmAsval/FModel');
						return null;
					}} />

					{/* 404 */}
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
};

export default App;