import {useEffect, useState} from "react";
import axios from "axios";
import { json } from "react-router-dom";

export function WeatherData(){
    //const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=${city},{state code},{country code}&limit={limit}&appid=30c05f2feb3b0253ed29f27de25f7585';

    console.log("sdfogiknhjhldsifgkbjhlsi;dbugj")

    const [coords, setCoords] = useState("")
    const city = 'Fulham,London'
    const limit = '1'

    const coordsApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit='+limit+'&appid=30c05f2feb3b0253ed29f27de25f7585';

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(coordsApiUrl)
            result.json().then(json => {
                console.log(json);
            })
        }
        fetchData();
    }, []);
}