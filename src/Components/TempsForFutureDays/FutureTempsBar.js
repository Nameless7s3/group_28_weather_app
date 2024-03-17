import TempForFutureDay from "./TempForFutureDay";
import {getWeatherData} from "../Weather_Data/WeatherData";
import React, { useState, useEffect } from 'react';

function FutureTempsBar(){
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getWeatherData();
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Check if weatherData is null before accessing its properties
    if (!weatherData) {
      return <div>Loading...</div>;
    }
    return(
    <div>
        <TempForFutureDay day={weatherData.day01Name} temperature={weatherData.day01Temp}/>
        <TempForFutureDay day={weatherData.day02Name} temperature={weatherData.day02Temp}/>
        <TempForFutureDay day={weatherData.day03Name} temperature={weatherData.day03Temp}/>
        <TempForFutureDay day={weatherData.day04Name} temperature={weatherData.day04Temp}/>
    </div>)
}

export default FutureTempsBar;