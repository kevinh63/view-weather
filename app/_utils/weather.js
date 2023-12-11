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

const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours());
    const formattedHours = hours.length === 1 ? hours : hours.padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} - ${formattedHours}:${minutes}`;
  };

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
        <div class="mx-auto p-4 flex justify-center">
            <div class="flex flex-wrap">
                <div class="w-full px-2">
                    <div class="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full dark:bg-gray-600">
                        <div class="px-6 py-6 relative">
                            {weatherData && forecastData ? (
                                <div>
                                    {weatherData.weather && weatherData.weather.length > 0 && (
                                        <>
                                        <div class="flex mb-2 justify-between items-center">
                                            <h5 class="font-bold text-xl font">Current Weather in {location}</h5><small class="capitalize">Description: {weatherData.weather[0].description}</small>
                                        </div>

                                        <div class="text-right">
                                            <h3 class="font-bold text-4xl mb-3">{weatherData.main.temp}°C</h3>
                                        </div>

                                        <div class="block sm:flex justify-between items-center flex-wrap">
                                            <div class="w-full sm:w-1/2">
                                                <div class="flex mb-2 justify-between items-center"><span>Temp min</span><small class="px-2 inline-block">{weatherData.main.temp_min}°C</small></div>
                                            </div>

                                            <div class="w-full sm:w-1/2">
                                                <div class="flex mb-2 justify-between items-center"><span>Temp max</span><small class="px-2 inline-block">{weatherData.main.temp_max}°C</small></div>
                                            </div>

                                            <div class="w-full sm:w-1/2">
                                                <div class="flex mb-2 justify-between items-center"><span>Feels like</span><small class="px-2 inline-block">{weatherData.main.feels_like}°C</small></div>
                                            </div>

                                            <div class="w-full sm:w-1/2">
                                                <div class="flex mb-2 justify-between items-center"><span>Wind</span><small class="px-2 inline-block">{weatherData.wind.speed} m/s</small></div>
                                            </div>
                                        </div>
                                        </>
                                    )}

                                    <div class="divider table mx-t text-center bg-transparent whitespace-nowrap"><span class="inline-block mt-3 text-xk"><small>Forecast for {location}</small></span></div>
                                    <div class="px-6 py-3 relative">
                                        {forecastData.list && forecastData.list.length > 0 && (
                                            <div>
                                                {forecastData.list.slice(0, 5).map((item, index) => {
                                                    const formattedTime = formatDateTime(item.dt_txt);

                                                    return (
                                                        <div key={index} class="justify-between items-center flex">
                                                            <div>
                                                                <span>{formattedTime}</span>
                                                            </div>

                                                            <div>
                                                                <span>{item.main.temp}°C</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-xl font-bold mt-5">Weather Map for {location}</h2>
                                    <iframe
                                        title="Weather Map"
                                        width="1024"
                                        height="800"
                                        class="border-none"
                                        src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=0&lon=0&zoom=1`}
                                    ></iframe>
                                </div>
                            ) : (
                                <p>Loading weather data...</p>
                            )} 
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
}