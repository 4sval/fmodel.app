import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './styles/index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet>
				<title>FModel</title>
			</Helmet>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);