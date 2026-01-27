import React, { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_OPENWEATHER_KEY;
if (!APIKEY) console.warn("VITE_OPENWEATHER_KEY is not set in .env");

export default function WeatherCard({ query }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);
  const [units, setUnits] = useState("metric"); // metric | imperial

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    async function fetchWeather() {
      setStatus("loading");
      setError(null);

      // query may be "lat,lon" or city name
      let url;
      const isLatLon = typeof query === "string" && query.includes(",");
      if (isLatLon) {
        const [lat, lon] = query.split(",").map(s => s.trim());
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&units=${units}&appid=${APIKEY}`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=${units}&appid=${APIKEY}`;
      }

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || `HTTP ${res.status}`);
        }
        const json = await res.json();
        setData(json);
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
        setStatus("error");
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, [query, units]);

  if (status === "idle") return null;
  if (status === "loading") return <div className="card">Loading...</div>;
  if (status === "error")
    return <div className="card error">Error: {error || "Unknown error"}</div>;

  // success
  const weather = data;
  const temp = Math.round(weather.main.temp);
  const feels = Math.round(weather.main.feels_like);
  const desc = weather.weather?.[0]?.description || "";
  const icon = weather.weather?.[0]?.icon; // e.g. "01d"
  const cityName = `${weather.name}${weather.sys?.country ? ", " + weather.sys.country : ""}`;

  return (
    <div className="card">
      <div className="card-header">
        <h2>{cityName}</h2>
        <div className="units">
          <label>
            <input
              type="radio"
              name="units"
              checked={units === "metric"}
              onChange={() => setUnits("metric")}
            />
            °C
          </label>
          <label>
            <input
              type="radio"
              name="units"
              checked={units === "imperial"}
              onChange={() => setUnits("imperial")}
            />
            °F
          </label>
        </div>
      </div>

      <div className="weather-body">
        <div className="temp-block">
          <div className="temp">{temp}°{units === "metric" ? "C" : "F"}</div>
          <div className="desc">{desc}</div>
          <div className="feels">Feels like {feels}°</div>
        </div>

        {icon && (
          <img
            alt={desc}
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            className="weather-icon"
          />
        )}
      </div>

      <div className="extra">
        <div>Humidity: {weather.main.humidity}%</div>
        <div>Wind: {Math.round(weather.wind.speed)} {units === "metric" ? "m/s" : "mph"}</div>
      </div>
    </div>
  );
}
