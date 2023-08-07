// routes
import { lazy } from 'react';
import { RouteObject, Navigate, useRoutes } from 'react-router-dom';
import AppLayout from 'layouts/AppLayout';

const HomePage = lazy((): any => import('pages/HomePage/HomePage'));

export enum Routes {
	EMPTY = '',
	MAIN = '/*',
}

export const PrivateRoutes: RouteObject[] = [
	{
		index: true,
		element: <Navigate to="/home" replace />,
	},
	{
		path: '',
		element: <AppLayout />,
		children: [
			{
				element: <HomePage />,
				path: '/home',
			},
		],
	},
];

export const GlobalRoutes = () => {
	const routes = PrivateRoutes;
	const element = useRoutes(routes);
	return element;
};
