import React from "react";
import "./weatherCard.css";

function WeatherCard({ data }) {
  console.log(data);
  return (
    <>
      <div className="weather-card">
        <div className="temp">
          {Math.round(parseFloat(data.main.temp))}
          <div className="icons">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`}
              alt=""
            />
            <span className="deg">°C</span>
          </div>
        </div>
        <div className="details-section">
          <div className="details">
            Feels Like: {Math.round(parseFloat(data.main.feels_like))} °C
          </div>
          <div className="details">Humidity: {data.main.humidity}</div>
          <div className="details">Wind Speed: {data.wind.speed}</div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
