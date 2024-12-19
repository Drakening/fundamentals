import React from 'react';
import { Wind, Thermometer, Droplets, Sun } from 'lucide-react';
import styles from './weatherDetails.module.css';

const WeatherDetails = ({ weather }) => {
  return (
    <div className={styles.weatherInfo}>
      <div className={styles.mainInfo}>
        <h2 className={styles.cityName}>
          {weather.name}, {weather.sys.country}
        </h2>
        <p className={styles.temperature}>
          {Math.round(weather.main.temp)}°C
        </p>
        <p className={styles.description}>
          {weather.weather[0].description}
        </p>
      </div>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <Thermometer className={styles.icon} />
          <span>Feels like: {Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div className={styles.detailItem}>
          <Wind className={styles.icon} />
          <span>Wind: {weather.wind.speed} m/s</span>
        </div>
        <div className={styles.detailItem}>
          <Droplets className={styles.icon} />
          <span>Humidity: {weather.main.humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <Sun className={styles.icon} />
          <span>Pressure: {weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
