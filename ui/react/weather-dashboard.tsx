'use client';
import React, { useState } from 'react';

const WeatherDashboard = () => {
  const mockWeatherData = {
    'New York': { temperature: '22°C', humidity: '56%', windSpeed: '15 km/h' },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    London: { temperature: '15°C', humidity: '70%', windSpeed: '20 km/h' },
  };

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [previousSearches, setPreviousSearches] = useState([]);

  const handleSearch = () => {
    if (mockWeatherData[city]) {
      setWeatherData(mockWeatherData[city]);
      setError('');
      if (!previousSearches.includes(city)) {
        setPreviousSearches([...previousSearches, city]);
      }
    } else {
      setWeatherData(null);
      setError('City not found.');
    }
  };

  const handlePreviousSearchClick = (searchedCity) => {
    setCity(searchedCity);
    setWeatherData(mockWeatherData[searchedCity]);
    setError('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          id="citySearch"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <button
          id="searchButton"
          onClick={handleSearch}
          style={{
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
      <div id="weatherData" style={{ marginBottom: '20px' }}>
        {weatherData ? (
          <div>
            <div>Temperature: {weatherData.temperature}</div>
            <div>Humidity: {weatherData.humidity}</div>
            <div>Wind Speed: {weatherData.windSpeed}</div>
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>Please search for a city to see weather data.</div>
        )}
      </div>
      <div id="previousSearches">
        {previousSearches.length > 0 && (
          <div>
            <h4>Previous Searches:</h4>
            {previousSearches.map((searchedCity, index) => (
              <button
                key={index}
                onClick={() => handlePreviousSearchClick(searchedCity)}
                style={{
                  display: 'block',
                  margin: '5px 0',
                  padding: '5px 10px',
                  backgroundColor: '#E0E0E0',
                  border: '1px solid #CCC',
                  cursor: 'pointer',
                }}
              >
                {searchedCity}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
