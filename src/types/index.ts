import { store } from 'store/index';
export interface WeatherData {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export type RootState = ReturnType<typeof store.getState>;
