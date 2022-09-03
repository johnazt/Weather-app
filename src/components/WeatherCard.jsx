import { useState } from "react";

const WeatherCard = ({ weather }) => {

	const [isCelsius, setIsCelsius] = useState(true);
	const celsius = Math.floor(weather.main?.temp - 273.15);
    const fahrenheit = Math.floor((celsius * 9) / 5 + 32);
    
	return (
		<div className="weather">
			<h1 className="weather__title">Weather App</h1>
			<div className="weather__info">
				<div className="weather__info-one">
                    <h3 className="weather__country">
                        {weather.name}, {weather.sys && weather.sys.country}
                    </h3>
                    <img
                        className="weather__icon"
                        src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
                    />
                    <p className="weather__description">
                        {weather.weather?.[0].description}
                    </p>
                </div>
				<div className="weather__info-two">
                    <p className="weather__clouds">
                    <i className='bx bx-cloud'></i> Clouds: <b>{weather.clouds?.all}%</b>
                    </p>
                    <p className="weather__humidity">
                    <i className='bx bxs-droplet'></i> Humidity: <b>{weather.main?.humidity}%</b>
                    </p>
                    <p className="weather__temp">
                    <i className='bx bxs-thermometer bx-flip-horizontal' ></i> Temperature: {isCelsius ? <b>{celsius}°C</b> : <b>{fahrenheit}°F</b>}
                    </p>
                    <button
                        onClick={() => {
                            setIsCelsius((prevIsCelsius) => !prevIsCelsius);
                        }}
                        className="weather__btn"
                    >
                        {isCelsius ? "To Farenheit" : "To Celsius"}
                    </button>
                </div>
			</div>
		</div>
	);
};

export default WeatherCard;
