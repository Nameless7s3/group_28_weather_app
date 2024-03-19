import { useEffect, useState } from "react";
import WeatherHeader from "../WeatherHeader/WeatherHeader";
import MainTemperature from "../MainTemperature/MainTemperature";
import TempTimeScrollBar from "../TempAtTime/TempTimeScrollBar";
import FutureTempsBar from "../TempsForFutureDays/FutureTempsBar";
import styles from "../Weather_Data/WeatherPage.module.css";

export default function WeatherData() {
    const [futureWeather, setFutureWeather] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);

    var country = '';
    var countryState = '';
    var countryCity = '';
    var countryStateCity = '';
    
    var selectedCampus = localStorage.getItem("selected_campus_0");
    
    var locationParts = selectedCampus.split(",").map(part => part.trim());
    console.log(locationParts, "doifnsodginsdgoin")
    if (locationParts.length >= 1) {
        country = locationParts[locationParts.length - 1];
    }
    
    if (locationParts.length >= 2) {
        countryState = locationParts[locationParts.length - 2] + ", "+ country;
    }
    
    if (locationParts.length >= 3) {
        countryStateCity = locationParts[locationParts.length - 3] +", "+ countryState;
    }
    
    console.log("Country:", country);
    console.log("Country + State:", countryState);
    console.log("Country + State + City:", countryStateCity);    


    console.log(country)
    const ftrWeatherAtAreaApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+countryState+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'
    const currWeatherAtAreaApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+countryState+'&units=metric&appid=30c05f2feb3b0253ed29f27de25f7585'

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Attempt to fetch weather data with specific location
                const futureWeatherResult = await fetch(ftrWeatherAtAreaApiUrl);
                const futureJson = await futureWeatherResult.json();
    
                // Check if the first API call was successful
                if (futureJson.cod === "200") {
                    // First API call successful, set weather data
                    setFutureWeather(futureJson);

                    const currentWeatherResult = await fetch(currWeatherAtAreaApiUrl);
                    const currentJson = await currentWeatherResult.json();

                    setCurrentWeather(currentJson)
                    
                } else {
                    // Set future weather
                    // First API call unsuccessful, try with city and country only
                    const secondFutureWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+countryStateCity+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'
                    const secondFutureResult = await fetch(secondFutureWeatherUrl);
                    const secondFutureJson = await secondFutureResult.json();
                    // Set future weather data from second API call
                    setFutureWeather(secondFutureJson);

                    // Set current weather
                    const secondCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+countryStateCity+'&units=metric&appid=30c05f2feb3b0253ed29f27de25f7585'
                    const secondCurrentResult = await fetch(secondCurrentWeatherUrl)
                    const secondCurrentJson = await secondCurrentResult.json()
                    // Set future weather data from second API call
                    setCurrentWeather(secondCurrentJson)
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchData();
    }, []);
    

    if (futureWeather === null || currentWeather === null) {
        // Data is still being fetched
        return <div>Loading weather data...</div>;
    }
    //console.log(futureWeather)
    console.log(currentWeather)
    return(
        <div className={styles.WeatherPageContainer}>
            <WeatherHeader className={styles.WeatherHeader} cityName={futureWeather.city.name} uniName={locationParts[0]}/>
            <MainTemperature currentTemp={currentWeather.main.temp}/>
            <TempTimeScrollBar/>
            <FutureTempsBar/>
        </div>
    );
}