import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import RingLoader from "react-spinners/RingLoader";
import dataImg from "./dataImg";
import axios from "axios";
import "./App.css";

function App() {
	const [loader, setLoader] = useState(false);
	const [weather, setWeather] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);

		function success(pos) {
			const crd = pos.coords;
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=841a5a5758ea96e0663d349e953881a3`
				)
				.then((res) => {
					setWeather(res.data);
					setLoader(true);
				})
				.catch((error) => console.log(error));
		}

	}, []);
	backgroundImage();

	// ===== SETTING BACKGROUND ======

	function backgroundImage() {
		dataImg.map((element) => {
			document.body.className = "body-background";
			if (weather.weather?.[0].description === element.description) {
				document.body.style.backgroundImage = `url(${element.img})`;
			}
		});
	}

	// ===== RENDER WEATHER CARD ======

	return (
		<div className="App">
			{loader ? (
				<WeatherCard weather={weather} />
			) : (
				<div className="loader">
					<RingLoader color={"#fff"} size={100} />
				</div>
			)}
		</div>
	);
}

export default App;
