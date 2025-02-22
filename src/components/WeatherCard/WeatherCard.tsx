import React from "react";
import "./WeatherCard.css";

interface WeatherProps {
  weather: {
    city: string;
    temperature: number;
    description: string;
  };
}

const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2 className="weather-city">{weather.city}</h2>
      <p className="weather-temp">{weather.temperature}</p>
      <p className="weather-desc">{weather.description}</p>
    </div>
  );
};

export default WeatherCard;
