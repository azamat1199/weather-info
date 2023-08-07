import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { BaseLayoutProps } from './types';
import { Loader } from 'components/Loader/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback/index';
import Header from 'layouts/Header/Header';

const AppLayout: FC<BaseLayoutProps> = ({ children }) => (
	<ErrorBoundary FallbackComponent={ErrorFallback}>
		<div className="">
			{/* <Header /> */}
			<Loader>
				<>{children || <Outlet />}</>
			</Loader>
		</div>
	</ErrorBoundary>
);

export default AppLayout;
