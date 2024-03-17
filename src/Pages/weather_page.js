import WeatherHeader from "../Components/WeatherHeader/WeatherHeader";
import MainTemperature from "../Components/MainTemperature/MainTemperature";
import TempTimeScrollBar from "../Components/TempAtTime/TempTimeScrollBar";
import FutureTempsBar from "../Components/TempsForFutureDays/FutureTempsBar";
import styles from "./WeatherPage.module.css";

function WeatherPage() {
    return(
        <>
            <WeatherHeader/>
            <MainTemperature/>
            <TempTimeScrollBar/>
            <FutureTempsBar/>
        </>
    )
}

export default WeatherPage;