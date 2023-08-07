import axios from 'axios';

const API_KEY = '439d4b804bc8187953eb36d2a8c26a02';
const BASE_URL = 'https://openweathermap.org/data/2.5/weather';

export const getWeatherInfo = async (region: string) => {
	try {
		const response = await axios.get(
			`${BASE_URL}?q=${region}&appid=${API_KEY}&units=metric`,
		);

		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch weather data.');
	}
};

// https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=1a13e68b7acaa3e5c7cd1ba8d0f7702d
// https://openweathermap.org/data/2.5/find?q=jizzax&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric
