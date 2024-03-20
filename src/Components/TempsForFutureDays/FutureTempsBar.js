import TempForFutureDay from "./TempForFutureDay";
import {WeatherData} from "../Weather_Data/WeatherData";
import styles from "./FutureTempsBar.module.css";

// This is the data for the future temperatures
const weatherData ={
  day01Name : "Monday",
  day01Temp : "11°C",
  day01ImageSrc: "./images/weather-icon.png",
  day02Name : "Tuesday",
  day02Temp : "9°C",
  day02ImageSrc: "./images/Rain.png",
  day03Name : "Wednesday",
  day03Temp : "7°C",
  day03ImageSrc: "./images/Lightning.png",
  day04Name : "Thursday",
  day04Temp : "10°C",
  day04ImageSrc: "./images/Rain.png",
  day05Name : "Friday",
  day05Temp : "13°C"
};
// Component to display future temperatures
function FutureTempsBar(){
    return(<>
    <div className={styles.FutureTempsBarContainer}>
        <TempForFutureDay day={weatherData.day01Name} temperature={weatherData.day01Temp} imageSrc={weatherData.day01ImageSrc} className={styles.FutureTemp}/>
        <TempForFutureDay day={weatherData.day02Name} temperature={weatherData.day02Temp} imageSrc={weatherData.day02ImageSrc} className={styles.FutureTemp}/>
        <TempForFutureDay day={weatherData.day03Name} temperature={weatherData.day03Temp} imageSrc={weatherData.day03ImageSrc} className={styles.FutureTemp}/>
        <TempForFutureDay day={weatherData.day04Name} temperature={weatherData.day04Temp} imageSrc={weatherData.day04ImageSrc} className={styles.FutureTemp}/>
    </div></>)
}

export default FutureTempsBar;