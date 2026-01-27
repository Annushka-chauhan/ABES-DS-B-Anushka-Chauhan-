import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setQuery(city.trim());
  };

  // optional: quick default (uncomment to start with a city)
  // const [query, setQuery] = useState("London");

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          aria-label="city"
          className="search-input"
          placeholder="Enter city (e.g., London)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn" type="submit">Search</button>
        <button
          type="button"
          className="btn btn-geo"
          onClick={() => {
            if (!navigator.geolocation) {
              alert("Geolocation not supported by your browser");
              return;
            }
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                const { latitude, longitude } = pos.coords;
                // pass coords as "lat,lon" string: WeatherCard handles both types
                setQuery(`${latitude},${longitude}`);
              },
              (err) => {
                alert("Could not get location: " + err.message);
              }
            );
          }}
        >
          Use my location
        </button>
      </form>

      {query ? <WeatherCard query={query} /> : (
        <p className="hint">Search for a city or use your location.</p>
      )}

      <footer className="footer">
        Built with OpenWeatherMap  Render the site to Remember to set <code>VITE_OPENWEATHER_KEY</code>
      </footer>
    </div>
  );
}
