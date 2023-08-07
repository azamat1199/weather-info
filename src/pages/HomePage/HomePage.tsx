import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from 'store';
import IconSearch from 'assets/icons8-search-30.png';
import { WeatherData, RootState } from 'types';

const HomePage = () => {
	const [region, setRegion] = useState('Tashkent');
	const [city, setCity] = useState('');
	const [weatherInfo, setWeatherInfo] = useState(null);

	const dispatch = useDispatch();
	const weatherData: any = useSelector((state: RootState) => state.weather);
	const gradusInfo = Math?.round(weatherData?.main?.feels_like);
	console.log(weatherData);

	const handleFetchWeather = async () => {
		try {
			const data: any = await fetchWeatherData(city);
			setWeatherInfo(data);
		} catch (error: any) {
			console.error(error.message);
			setWeatherInfo(null);
		}
	};

	useEffect(() => {
		// @ts-ignore
		dispatch(fetchWeatherData(region));
	}, [dispatch, region]);

	return (
		<div className="home">
			{weatherInfo && (
				<div>
					<h1>Weather: {weatherData?.weather[0].description}</h1>
					<img
						src={`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
						alt="Weather Icon"
					/>
				</div>
			)}
			<div className="leftSide">
				<div className="gradusGroup">
					<h6 className="gradus">{gradusInfo}</h6>
					<div>
						<span className="city">{weatherData?.name}</span>
						<h5 className="date">Aug 06 2023</h5>
					</div>
					<div>
						<img
							src={`https://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
							alt="Weather Icon"
						/>
						<h5 className="cloudity">{weatherData?.weather[0].description}</h5>
					</div>
				</div>
			</div>
			<div className="rightSide">
				<div className="headGroup">
					<span className="inpGroup">
						<input
							className="locationInp"
							placeholder="Another location"
							type="text"
							value={city}
							onChange={(e) => setCity(e?.target.value)}
						/>
						<button
							onClick={handleFetchWeather}
							className="searchBtn"
							type="submit"
						>
							<img className="img" src={IconSearch} alt="search" />
						</button>
					</span>
					<li>
						<h5>Birmingham</h5>
					</li>
					<li>
						<h5>Manchester</h5>
					</li>
					<li>
						<h5>New York</h5>
					</li>
					<li>
						<h5>Ca ifornia</h5>
					</li>
					<p className="line"></p>
				</div>
				<div className="footGroup">
					<h5>Weather Details</h5>
					<span className="detailGroup">
						<h5>Cloudy</h5>
						<h6>{weatherData?.clouds?.all}%</h6>
					</span>
					<span className="detailGroup">
						<h5>Humidity</h5>
						<h6>{weatherData?.main?.humidity}%</h6>
					</span>
					<span className="detailGroup">
						<h5>Wind</h5>
						<h6> {weatherData?.wind?.speed}km/h</h6>
					</span>
					<span className="detailGroup">
						<h5>Rain</h5>
						<h6>{weatherData?.main?.feels_like}mm</h6>
					</span>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
