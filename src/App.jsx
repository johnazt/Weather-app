import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import "./App.css";
import dataImg from "./dataImg";
import axios from "axios";

function App() {
	const [weather, setWeather] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);

		function success(pos) {
			const crd = pos.coords;
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=841a5a5758ea96e0663d349e953881a3`
				)
				.then((res) => setWeather(res.data));
		}
	}, []);

	// ===== SETTING BACKGROUND ======

  dataImg.map((element) => {
    
		document.body.className = "body-background";
		if (weather.weather?.[0].description === element.description ) {
			document.body.style.backgroundImage = `url(${element.img})`;
		}
	});

  console.log(weather);
  
  // ===== RENDER WEATHER CARD ======

	return (
    <div className="App">
      <Loader />
			<WeatherCard weather={weather} />
		</div>
	);
}

export default App;
