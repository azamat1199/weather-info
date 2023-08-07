import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorFallback } from 'components/ErrorFallback';

import queryClient from 'configs/react-query.config';
import { ScrollToTop } from 'services/ScrollToTop/ScrollToTop';
import { GlobalRoutes } from 'configs/global-routes';
import { store, persistor } from 'store';
import './App.css';

const App = () => (
	<div className="App">
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<main className="main">
							<ScrollToTop />
							<GlobalRoutes />
						</main>
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</ErrorBoundary>
	</div>
);

export default App;
