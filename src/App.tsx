import React from 'react';
import AppRouter from './components/AppRouter';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => {
	return (
		<HashRouter>
			<Header />
			<AppRouter></AppRouter>
		</HashRouter>
	);
};

export default App;
