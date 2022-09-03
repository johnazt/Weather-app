import WeatherCard from "./components/WeatherCard";
import RingLoader from "react-spinners/RingLoader";
import dataImg from "./dataImg";
import "./App.css";
import UseApi from "./hooks/UseApi";
import { useEffect } from "react";

function App() {
	// ======= GET CUSTOM HOOK USEAPI ========

	const { weather, loader } = UseApi();

	// ===== SETTING BACKGROUND ======

	useEffect(() => {

		dataImg.map((element) => {
			document.body.className = "body-background";
			if (weather.weather?.[0].description === element.description) {
				document.body.style.backgroundImage = `url(${element.img})`;
			}
		});
	}, [weather]);

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
