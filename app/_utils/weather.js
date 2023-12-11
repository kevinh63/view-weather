"use client"

import { useState, useEffect } from "react";

const fetchWeatherData = async (location) => {
  const apiKey = "63557662e9b9cfaab379b0c0a8830ac0";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  return data;
};

const fetchForecastData = async (location) => {
  const apiKey = "63557662e9b9cfaab379b0c0a8830ac0";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  return data;
};

const formatDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hours = String(dateTime.getHours());
  const formattedHours = hours.length === 1 ? hours : hours.padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${day} - ${formattedHours}:${minutes}`;
};

export default function WeatherInfo({ location }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const loadWeatherData = async () => {
      const fetchedWeatherData = await fetchWeatherData(location);
      setWeatherData(fetchedWeatherData);
    };

    const loadForecastData = async () => {
      const fetchedForecastData = await fetchForecastData(location);
      setForecastData(fetchedForecastData);
    };

    loadWeatherData();
    loadForecastData();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopOrBottom = () => {
    if (isScrolledDown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="bg-gray-600 text-white rounded-lg shadow-sm mb-4">
          <div className="p-6">
            {weatherData ? (
              <div>
                <h5 className="font-bold text-xl mb-2">
                  Current Weather in {location}
                </h5>
                <p className="text-sm mb-4 capitalize">
                  Description: {weatherData.weather[0].description}
                </p>
                <h3 className="font-bold text-4xl mb-4">
                  {Math.round(weatherData.main.temp)}°C
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span>Temp min:</span>{" "}
                    <strong>{Math.round(weatherData.main.temp_min)}°C</strong>
                  </div>
                  <div>
                    <span>Temp max:</span>{" "}
                    <strong>{Math.round(weatherData.main.temp_max)}°C</strong>
                  </div>
                  <div>
                    <span>Feels like:</span>{" "}
                    <strong>{Math.round(weatherData.main.feels_like)}°C</strong>
                  </div>
                  <div>
                    <span>Wind:</span>{" "}
                    <strong>{weatherData.wind.speed} m/s</strong>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading current weather...</p>
            )}
          </div>
        </div>
        <div className="bg-gray-600 text-white rounded-lg shadow-sm mb-4">
          <div className="p-6">
            {forecastData ? (
              <div>
                <h5 className="font-bold text-xl mb-2">
                  Forecast for {location}
                </h5>
                {forecastData.list.slice(0, 5).map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{formatDateTime(item.dt_txt)}</span>
                    <strong>{Math.round(item.main.temp)}°C</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading forecast data...</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <h2 className="text-xl font-bold mb-4 text-white text-center">
          Weather Map
        </h2>
        <iframe
          title="Weather Map"
          width="100%"
          height="800"
          className="border-none"
          src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=0&lon=0&zoom=1`}
        ></iframe>
      </div>
      <button
        onClick={scrollToTopOrBottom}
        className="fixed bottom-5 left-5 bg-green-500 text-white p-2 rounded-md cursor-pointer z-50 hover:bg-green-600"
      >
        {isScrolledDown ? "Scroll to Top" : "Scroll to Bottom"}
      </button>
    </div>
  );
}
