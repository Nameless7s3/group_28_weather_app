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
    var state = '';
    var city = '';
    
    var selectedCampus = localStorage.getItem("selected_campus_0");
    
    var locationParts = selectedCampus.split(",").map(part => part.trim());
    
    // Extract country
    if (locationParts.length >= 1) {
        country = locationParts[locationParts.length - 1];
    }
    
    // Extract state
    if (locationParts.length >= 2) {
        state = locationParts[locationParts.length - 2];
    }
    
    // Extract city
    if (locationParts.length >= 3) {
        city = locationParts[locationParts.length - 3];
    }
    
    // If city is not available, adjust the indexes
    if (city === '') {
        if (locationParts.length >= 2) {
            city = locationParts[locationParts.length - 2];
        }
        if (locationParts.length >= 3) {
            state = locationParts[locationParts.length - 3];
        }
    }
    
    console.log("Country:", country);
    console.log("State:", state);
    console.log("City:", city);        

    var countryCity = city + ", " + country
    var countryStateCity = city + state + country
    var stateCountry = state + ", "+ country

    console.log(countryCity + " HERE")
    const ftrWeatherAtAreaApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+countryCity+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'
    const currWeatherAtAreaApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+countryCity+'&units=metric&appid=30c05f2feb3b0253ed29f27de25f7585'

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

                    if(secondFutureJson.cod === "200") {
                        // Set future weather data from second API call
                        setFutureWeather(secondFutureJson);
                        
                        // Set current weather
                        const secondCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+countryStateCity+'&units=metric&appid=30c05f2feb3b0253ed29f27de25f7585'
                        const secondCurrentResult = await fetch(secondCurrentWeatherUrl)
                        const secondCurrentJson = await secondCurrentResult.json()
                        // Set future weather data from second API call
                        setCurrentWeather(secondCurrentJson)
                    }
                    else{
                        //console.log(stateCountry, "ASODIUHSAODIHn")
                        const thirdFutureWeatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+stateCountry+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'
                        const thirdFutureResult = await fetch(thirdFutureWeatherUrl);
                        const thirdFutureJson = await thirdFutureResult.json();

                        setFutureWeather(thirdFutureJson)

                        const thirdCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+stateCountry+'&units=metric&appid=30c05f2feb3b0253ed29f27de25f7585'
                        const thirdCurrentResult = await fetch(thirdCurrentWeatherUrl);
                        const thirdCurrentJson = await thirdCurrentResult.json();

                        setCurrentWeather(thirdCurrentJson)
                    }
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
    console.log(futureWeather)

    var ftrTimeStamps = []

    for (let i=0; i<40; i++) {
        ftrTimeStamps.push(futureWeather.list[i].dt_txt)
    }

    //convert collected timestamps into dates and find next day's date
    const dateObjs = ftrTimeStamps.map((timestamp) => new Date(timestamp))
    const today = dateObjs[0].getDate();
    const nextDay = new Date(dateObjs[0]);
    nextDay.setDate(today + 1);

    nextDay.setHours(12, 0, 0, 0);

    //find the index of the next day's 12 PM temperature
    const nextDayIndex = dateObjs.findIndex((date) => date.getTime() === nextDay.getTime());

    /*
    console.log(`The first index with next day's 12 PM temperature is: ${nextDayIndex}`);
    console.log(`Tomorrow 12 PM temperature is: ${futureWeather.list[nextDayIndex].main.temp}`);*/

    return(
        <div className={styles.WeatherPageContainer}>
            <WeatherHeader className={styles.WeatherHeader} cityName={futureWeather.city.name} uniName={locationParts[0]} tmrTemp={futureWeather.list[nextDayIndex].main.temp}/>
            <MainTemperature currentTemp={currentWeather.main.temp}/>
            <TempTimeScrollBar/>
            <FutureTempsBar/>
        </div>
    );
}