import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import paths from '../utils/paths';
import Password from '../pages/Password';
import ColorPicker from '../pages/ColorPicker';
import CardCheck from '../pages/CardCheck';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route
				path={paths.password}
				element={<Password />}
			></Route>
			<Route
				path={paths.colors}
				element={<ColorPicker />}
			></Route>
			<Route
				path={paths.cards}
				element={<CardCheck />}
			></Route>
			<Route
				path='/*'
				element={<Navigate to={paths.password} />}
			></Route>
		</Routes>
	);
};

export default AppRouter;
