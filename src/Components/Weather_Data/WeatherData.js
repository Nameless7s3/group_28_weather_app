import { useEffect, useState } from "react";

export function WeatherData() {
    const [weather, setWeather] = useState(null);

    var country = '';
    var countryState = '';
    var countryStateCity = '';
    
    var selectedCampus = localStorage.getItem("selected_campus_0");
    
    var locationParts = selectedCampus.split(",").map(part => part.trim());
    
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
    const weatherAtCscApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+countryStateCity+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Attempt to fetch weather data with specific location
                const result = await fetch(weatherAtCscApiUrl);
                const json = await result.json();
    
                // Check if the first API call was successful
                if (json.cod === "200") {
                    // First API call successful, set weather data
                    setWeather(json);
                } else {
                    // First API call unsuccessful, try with city and country only
                    const secondUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+countryState+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'
                    const secondResult = await fetch(secondUrl);
                    const secondJson = await secondResult.json();
                    // Set weather data from second API call
                    setWeather(secondJson);
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchData();
    }, []);
    

    console.log(weather)
    return;
}