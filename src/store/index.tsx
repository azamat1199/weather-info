// store.ts
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from 'types';
import { getWeatherInfo } from 'api/WeatherApi';

const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

const initialState = {
	weather: null,
	error: null,
};

type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>;

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_WEATHER_SUCCESS:
			return {
				...state,
				weather: action.payload,
				error: null,
			};
		case FETCH_WEATHER_ERROR:
			return {
				...state,
				weather: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

const fetchWeatherSuccess = (weather: any) => ({
	type: FETCH_WEATHER_SUCCESS,
	payload: weather,
});

const fetchWeatherError = (error: string) => ({
	type: FETCH_WEATHER_ERROR,
	payload: error,
});

export const fetchWeatherData = (region: string) => {
	return async (dispatch: any) => {
		try {
			const weatherData = await getWeatherInfo(region);
			dispatch(fetchWeatherSuccess(weatherData));
			return weatherData;
		} catch (error: string | any) {
			dispatch(fetchWeatherError(error));
		}
	};
};

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
