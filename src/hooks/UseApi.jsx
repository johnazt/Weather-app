import axios from "axios";
import { useEffect, useState } from "react";

const UseApi = () => {
	const [weather, setWeather] = useState({});
	const [loader, setLoader] = useState(false);

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

	return { weather, loader };
};

export default UseApi;
