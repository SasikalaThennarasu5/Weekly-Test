import React, { useState } from 'react';
import axios from 'axios';

function Project3() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '6d52164c59c33ed19cc500a3280a52a0';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric' // For Celsius
        }
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try another location.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const getBackgroundClass = () => {
    if (!weatherData) return 'bg-light';
    const temp = weatherData.main.temp;
    if (temp > 30) return 'bg-danger bg-opacity-10';
    if (temp > 20) return 'bg-warning bg-opacity-10';
    if (temp > 10) return 'bg-info bg-opacity-10';
    return 'bg-primary bg-opacity-10';
  };

  return (
    <div className={`min-vh-100 py-4 ${getBackgroundClass()}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-center mb-4">Weather App</h1>
            
            <form onSubmit={fetchWeather} className="mb-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <button 
                  className="btn btn-primary" 
                  type="submit"
                  disabled={loading || !city.trim()}
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </form>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {loading && (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {weatherData && (
              <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title">
                    {weatherData.name}, {weatherData.sys.country}
                  </h2>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img 
                      src={getWeatherIcon(weatherData.weather[0].icon)} 
                      alt={weatherData.weather[0].description}
                    />
                    <span className="display-4">
                      {Math.round(weatherData.main.temp)}°C
                    </span>
                  </div>
                  <p className="text-capitalize">
                    {weatherData.weather[0].description}
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <div className="p-2">
                        <strong>Feels Like</strong>
                        <div>{Math.round(weatherData.main.feels_like)}°C</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-2">
                        <strong>Humidity</strong>
                        <div>{weatherData.main.humidity}%</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-2">
                        <strong>Wind</strong>
                        <div>{weatherData.wind.speed} m/s</div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div className="p-2">
                        <strong>Min Temp</strong>
                        <div>{Math.round(weatherData.main.temp_min)}°C</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-2">
                        <strong>Max Temp</strong>
                        <div>{Math.round(weatherData.main.temp_max)}°C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project3;