import React, { useState } from 'react';
import { Search, Wind, Thermometer, Droplets, Sun } from 'lucide-react';
import Toast from './Toast';
import WeatherDetails from './WeatherDetails';
import styles from './Weather.module.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type = 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const fetchWeather = async () => {
    if (!city) {
      showToast('Please enter a city name');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b7583b1a71c7f06fd237373bafc7495&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(
          response.status === 404 
            ? 'City not found' 
            : 'Failed to fetch weather data'
        );
      }
      
      const data = await response.json();
      setWeather(data);
      showToast('Weather data fetched successfully', 'success');
    } catch (err) {
      showToast(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className={styles.container}>
      {toast.show && (
        <Toast message={toast.message} type={toast.type} />
      )}

      <div className={styles.weatherCard}>
        <h1 className={styles.title}>Weather App</h1>
        
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className={styles.input}
          />
          <button
            type="submit"
            className={styles.searchButton}
            disabled={loading}
          >
            <Search className={styles.searchIcon} />
          </button>
        </form>

        {loading && (
          <div className={styles.loading}>Loading...</div>
        )}

        {weather && <WeatherDetails weather={weather} />}
      </div>
    </div>
  );
};

export default WeatherApp;
