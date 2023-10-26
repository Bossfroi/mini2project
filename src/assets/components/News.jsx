import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherNewsApp = () => {
  const [weather, setWeather] = useState({});
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });

    // Fetch news data from NewsAPI
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Weather and News</h1>

      <div className="weather">
        <h2>Weather</h2>
        {weather.main && (
          <div>
            <p>Location: {weather.name}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </div>

      <div className="news">
        <h2>News</h2>
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherNewsApp;
