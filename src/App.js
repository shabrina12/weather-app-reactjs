import Search from './components/search/search';
import {WEATHER_API_URL} from './api';
import CurrentWeather from './components/current-weather/curWeather';
import Forecast from './components/forecast/forecast';
import './App.css';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
    const ForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
  
    Promise.all([currentWeatherFetch, ForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecast({city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className="App">
     <Search onSearchChange={handleOnSearchChange} />
     {currentWeather && <CurrentWeather data={currentWeather} />}
     { forecast && <Forecast dataForecast={forecast} />}
    </div>
  );
}

export default App;
