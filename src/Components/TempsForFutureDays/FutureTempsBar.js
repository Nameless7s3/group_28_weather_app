import TempForFutureDay from "./TempForFutureDay";
import {WeatherData} from "../Weather_Data/WeatherData";
import styles from "./FutureTempsBar.module.css";

const weatherData ={
  day01Name : "Monday",
  day01Temp : "11°C",
  day02Name : "Tuesday",
  day02Temp : "9°C",
  day03Name : "Wednesday",
  day03Temp : "7°C",
  day04Name : "Thursday",
  day04Temp : "10°C",
  day05Name : "Friday",
  day05Temp : "13°C"
};

function FutureTempsBar(){
    return(<><WeatherData/>
    <div className={styles.FutureTempsBarContainer}>
        <TempForFutureDay day={weatherData.day01Name} temperature={weatherData.day01Temp} className={styles.FutureTemp}/>
        <TempForFutureDay day={weatherData.day02Name} temperature={weatherData.day02Temp} className={styles.FutureTemp}/>
        <TempForFutureDay day={weatherData.day03Name} temperature={weatherData.day03Temp} className={styles.FutureTemp}/>
        <TempForFutureDay day={weatherData.day04Name} temperature={weatherData.day04Temp} className={styles.FutureTemp}/>
    </div></>)
}

export default FutureTempsBar;