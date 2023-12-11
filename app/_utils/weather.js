"use client"

import { useState, useEffect } from "react"

const fetchWeatherData = async (location) => {
    const apiKey = "63557662e9b9cfaab379b0c0a8830ac0"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

const fetchForecastData = async (location) => {
    const apiKey = "63557662e9b9cfaab379b0c0a8830ac0"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
}

export default function WeatherInfo({ location }) {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    const loadWeatherData = async () => {
        const fetchedWeatherData = await fetchWeatherData(location);
        setWeatherData(fetchedWeatherData);
    };

    const loadForecastData = async () => {
        const fetchedForecastData = await fetchForecastData(location);
        setForecastData(fetchedForecastData);
    }

    useEffect(() => {
        loadWeatherData();
        loadForecastData();
    }, [location]);

    return (
        <div>
            {weatherData && forecastData ? (
                <div>
                    <h2>Weather in {location}</h2>
                    {weatherData.main && (
                        <p>Temperature: {weatherData.main.temp_min}°C - {weatherData.main.temp_max}°C</p>
                    )}
                    {weatherData.main && (
                        <p>Feels like: {weatherData.main.feels_like}°C</p>
                    )}
                    {weatherData.weather && weatherData.weather.length > 0 && (
                        <p className="capitalize">Description: {weatherData.weather[0].description}</p>
                    )}

                    <h2>Forecast for {location}</h2>
                    {forecastData.list && forecastData.list.length > 0 && (
                        <div>
                            {forecastData.list.slice(0, 5).map((item, index) => (
                                <div key={index}>
                                    <p>Date: {item.dt_txt}</p>
                                    <p>Temperature: {item.main.temp_min}°C - {item.main.temp_max}°C</p>
                                    <p>Feels like: {item.main.feels_like}°C</p>
                                    {item.weather && item.weather.length > 0 && (
                                        <p className="capitalize">Description: {item.weather[0].description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <h2>Weather Map for {location}</h2>
                    <iframe
                        title="Weather Map"
                        width="600"
                        height="450"
                        class="border-none"
                        src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=0&lon=0&zoom=5`}
                    ></iframe>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}