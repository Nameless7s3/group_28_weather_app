import { useEffect, useState } from "react";
import WeatherHeader from "../WeatherHeader/WeatherHeader";
import MainTemperature from "../MainTemperature/MainTemperature";
import TempAtTime from "../TempAtTime/TempAtTime";
import FutureTempsBar from "../TempsForFutureDays/FutureTempsBar";
import styles from "../Weather_Data/WeatherPage.module.css";
import tempScrollBarStyles from "../TempAtTime/ScrollBar.module.css"

//converts a string holding a time to an actual date
function parseTimeString(timeStr) {
    const [hours, minutes] = timeStr.split(":");
    const now = new Date(); // Get the current date
    const timeObject = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    return timeObject;
}

//convert unix time to readable time
function unixToReadableTime(unixTime) {
    const time = new Date(unixTime * 1000)

    const timeHours = time.getHours()
    const timeMins = time.getMinutes().toString().padStart(2, '0');

    const formattedTime = `${timeHours}:${timeMins}`;
    console.log(timeMins)
    return formattedTime
}

export default function WeatherData() {
    const [futureWeather, setFutureWeather] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);

    var country = '';
    var state = '';
    var city = '';
    
    var selectedCampus = localStorage.getItem("selected_campus_0");
    var startTime = localStorage.getItem("startTime")
    var endTime = localStorage.getItem("endTime")
    var locationParts = selectedCampus.split(",").map(part => part.trim());
    console.log(locationParts)

    var stateCountries = [
        "USA",
        "Canada",
        "Australia",
        "Brazil",
        "Mexico",
        "India",
        "Germany",
        "Argentina",
        "Russia",
        "Nigeria",
        "Pakistan",
        "China",
        "Indonesia",
        "South Africa",
        "Malaysia",
        "Nigeria",
        "Philippines",
        "Thailand",
        "Venezuela",
        "Switzerland"
    ]
    

    //extract country
    if (locationParts.length >= 1) {
        country = locationParts[locationParts.length - 1];
        if(country == "UK"){
            country = "GB"
        }
    }
    
    //extract state
    if (locationParts.length >= 2) {
        state = locationParts[locationParts.length - 2];
    }
    
    //extract city
    if (locationParts.length >= 3) {
        city = locationParts[locationParts.length - 3];
    }
    
    //if city is not available, adjust the indexes
    if (city === '') {
        if (locationParts.length >= 2) {
            city = locationParts[locationParts.length - 2];
        }
        if (locationParts.length >= 3) {
            state = locationParts[locationParts.length - 3];
        }
    }

    
    console.log("Country:", country);
    console.log("State or street:", state);
    console.log("City:", city); 

    var areaFormat = state + ", " + country
    for(let i=0; i<stateCountries.length; i++) {
        if(country == stateCountries[i]) {
            areaFormat = city + ", " + country
        }
    }


    console.log(areaFormat, startTime, "to", endTime)
    const ftrWeatherAtAreaApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+areaFormat+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'
    const currWeatherAtAreaApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+areaFormat+'&units=metric&appid=30c05f2feb3b0253ed29f27de25f7585'

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Attempt to fetch weather data with specific location
                const futureWeatherResult = await fetch(ftrWeatherAtAreaApiUrl);
                const futureJson = await futureWeatherResult.json();
    
                setFutureWeather(futureJson);

                const currentWeatherResult = await fetch(currWeatherAtAreaApiUrl);
                const currentJson = await currentWeatherResult.json();

                setCurrentWeather(currentJson)
                
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
    console.log(currentWeather)

    var ftrTimeStamps = []

    var ftrTimeStampsInRange = []
    var parsedStartTime = parseTimeString(startTime)
    var parsedEndTime = parseTimeString(endTime)

    //dawn and dusk times
    var sunriseTime = unixToReadableTime(currentWeather.sys.sunrise) + " AM"
    var sunsetTime = unixToReadableTime(currentWeather.sys.sunset) + " PM"

    //add all timestamps to new object
    for (let i=0; i<40; i++) {
        var currentTimeStamp = new Date(futureWeather.list[i].dt_txt)
        ftrTimeStamps.push(currentTimeStamp)

        //if current timestamp is within specified range, add it to the array
        if(currentTimeStamp >= parsedStartTime && currentTimeStamp <= parsedEndTime) {
            ftrTimeStampsInRange.push(futureWeather.list[i])
            console.log(parsedStartTime, parsedEndTime, currentTimeStamp, "OOO")
        }
    }

    console.log(ftrTimeStampsInRange, "Timestamps in start to end range")

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

    var futureTimes = []
    for(let i=0; i<ftrTimeStampsInRange.length; i++) {
        const currentTimestamp = ftrTimeStampsInRange[i].dt_txt
        const dateTimeSplit = currentTimestamp.split(' ');
        const timeString = dateTimeSplit[1];
        const timeComponents = timeString.split(':');
        const time = timeComponents.slice(0, 2).join(':')
        futureTimes.push(time)
    }

    let print = '';
    if (currentWeather.main.temp > 20) {
        print = "Don't forget to stay hydrated! It's hot outside!";
    }
    else if (currentWeather.main.temp > 10) {
        print = "It's a bit chilly outside, but it's not too bad!";
    }
    else {
        print = "Wrap up warm! It's chilly outside!";
    }

    // Air quality
    let AirQuality = 'Moderate';

    if (country === 'GB'){
        AirQuality = 'Good';
    }

    return(
        <div className={styles.WeatherPageContainer}>
            <WeatherHeader className={styles.WeatherHeader} cityName={futureWeather.city.name} uniName={locationParts[0]} tmrTemp={futureWeather.list[nextDayIndex].main.temp}/>
            <MainTemperature currentTemp={currentWeather.main.temp}/>
            <div className={tempScrollBarStyles.TempTimeScrollBar}>
                {ftrTimeStampsInRange.map((data, index) => (
                <TempAtTime time={futureTimes[index]} temp={ftrTimeStampsInRange[index].main.temp}/>
                ))}
            </div>
            <FutureTempsBar/>
            <figure>
                <img src="./images/Sunrise.png" alt="weather_icon" className={styles.sunrise}/>
                <figcaption className={styles.sunriseText}>{sunriseTime}</figcaption>
            </figure>
            <figure>
                <img src="./images/Sunset.png" alt="weather_icon" className={styles.sunset}/>
                <figcaption className={styles.sunsetText}>{sunsetTime}</figcaption>
            </figure>
            
            
            <h1 className={styles.airQuality}>Air Quality: {AirQuality}</h1>
            <p className={styles.printSuggestions}>{print}</p>
            
        </div>
    );
}