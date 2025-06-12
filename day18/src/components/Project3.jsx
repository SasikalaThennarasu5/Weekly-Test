import React, { useState } from 'react';
import axios from 'axios';

const Project3 = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=REPLACE_WITH_YOUR_KEY&units=metric`)

      .then(res => {
        setWeather(res.data);
        setError(null);
      })
      .catch(() => setError('City not found'));
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Project3;