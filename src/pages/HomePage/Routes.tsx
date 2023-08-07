// eslint-disable-next-line import/default
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const HomePage = React.lazy((): any => import('./HomePage'));

export const routeObject: RouteObject[] = [
	{
		index: true,
		element: <Navigate replace to="home" />,
	},
	{
		element: <HomePage />,
		path: 'home',
	},
];

export const Routes = () => {
	const element = useRoutes(routeObject);
	return element;
};
