import { useState, useEffect } from "react";
import Loader from "./component/loader";
import SearchBar from "./component/search";
import {
  getLocationWeather,
  getLocationWeatherForecast,
} from "./service/weatherService";
import WeatherCard from "./component/weatherCard";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentWeatherInfo, setCurr] = useState(undefined);
  const [intervalId, setIntervalId] = useState(undefined);
  const [errorMessage, setErrorMsg] = useState(undefined);

  function submit(location) {
    if (intervalId != undefined) {
      clearInterval(intervalId);
    }
    const func = () => {
      setLoading(true);
      getLocationWeather(location)
        .then((value) => {
          setCurr(value);
          setErrorMsg(undefined);
        })
        .catch((reason) => {
          console.log(reason);
          setErrorMsg(reason);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    func();
    const id = setInterval(func, 60000);
    setIntervalId(id);
  }

  return (
    <div className="main">
      <SearchBar onSubmit={submit} />
      <div className="content">
        {loading ? <Loader /> : <></>}
        {!loading && errorMessage != undefined ? (
          <div>{errorMessage}</div>
        ) : (
          <></>
        )}
        {!loading && currentWeatherInfo !== undefined ? (
          <WeatherCard data={currentWeatherInfo} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
