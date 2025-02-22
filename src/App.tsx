import React, { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";

const App: React.FC = () => {
  const [city, setCity] = useState<string>("Санкт-Петербург");
  const { weather, loading, error } = useWeather(city);

  console.log("Weather state:", weather);

  return (
    <div className="flex main__content">
      {weather && (
        <div className="weather-display">
          <span className="weather-icon" style={{ fontSize: "144px" }}>
            {weather.icon}
          </span>
          <WeatherCard weather={weather} />
        </div>
      )}
      <SearchBar onSearch={setCity} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
