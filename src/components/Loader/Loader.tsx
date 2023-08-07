import React, { Suspense } from 'react';
import { LoaderProps } from './types';

export const Loader: React.FC<LoaderProps> = ({ children }) => (
	<Suspense fallback={<div>...loading</div>}>{children}</Suspense>
);
