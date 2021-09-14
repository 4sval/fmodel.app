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
				<meta name='description' content="FModel is a beginner-friendly and open-source software for data-mining games made with Unreal Engine." />
				<meta name='description' content="FModel is a beginner-friendly and open-source software for data-mining games made with Unreal Engine." data-react-helmet='true' />
				<meta name='og:url' content='https://fmodel.app/' />
				<meta name='og:site_name' content='FModel' />
				<meta name='og:locale' content='en_US' />
				<meta name='og:type' content='website' />
				<meta name='og:title' content='FModel' />
				<meta name='og:description' content="FModel is a beginner-friendly and open-source software for data-mining games made with Unreal Engine." />
				<meta name='og:image' content='https://cdn.fmodel.app/i/png/fmodel_banner.png' />
				<meta name='og:image:alt' content='FModel Banner Art' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:site' content='@FModelApp' />
				<meta name='twitter:title' content='FModel' />
				<meta name='twitter:description' content="FModel is a beginner-friendly and open-source software for data-mining games made with Unreal Engine." />
				<meta name='twitter:image' content='https://cdn.fmodel.app/i/png/fmodel_banner.png' />
				<meta name='twitter:image:alt' content='FModel Banner Art' />
				<title>FModel</title>
			</Helmet>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById('root')
);