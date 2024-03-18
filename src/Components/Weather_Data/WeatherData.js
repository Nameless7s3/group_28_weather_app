import {useEffect, useState} from "react";
import axios from "axios";
import { json } from "react-router-dom";

export function WeatherData(){
    //const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=${city},{state code},{country code}&limit={limit}&appid=30c05f2feb3b0253ed29f27de25f7585';

    const [weather, setWeather] = useState("")
    const city = 'London, Mile End, GB'
    
    const weatherAtCityApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&mode=json&appid=30c05f2feb3b0253ed29f27de25f7585'

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(weatherAtCityApiUrl)

            result.json().then(json => {
                setWeather(json)
                console.log(json)
            })
        }
        fetchData();
    }, []);

    return 
}

