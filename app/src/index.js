import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './styles/index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<Helmet>
				<meta name='theme-color' content='#D7354E' />
				<meta name='description' content="Software for exploring Unreal Engine 4-5 games' files" />
				<meta name='description' content="Software for exploring Unreal Engine 4-5 games' files" data-react-helmet='true' />
				<meta name='og:url' content='' />
				<meta name='og:site_name' content='' />
				<meta name='og:locale' content='' />
				<meta name='og:type' content='' />
				<meta name='og:title' content='' />
				<meta name='og:description' content='' />
				<meta name='og:image' content='' />
				<meta name='og:image:alt' content='' />
				<meta name='twitter:card' content='' />
				<meta name='twitter:title' content='' />
				<meta name='twitter:description' content='' />
				<meta name='twitter:image' content='' />
				<meta name='twitter:image:alt' content='' />
				<title>FModel</title>
			</Helmet>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);