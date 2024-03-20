import WeatherHeader from "../Components/WeatherHeader/WeatherHeader";
import MainTemperature from "../Components/MainTemperature/MainTemperature";
import TempTimeScrollBar from "../Components/TempAtTime/TempTimeScrollBar";
import FutureTempsBar from "../Components/TempsForFutureDays/FutureTempsBar";
import WeatherData from "../Components/Weather_Data/WeatherData";

// Component to display the weather page
function WeatherPage() {
    return(
        <div>
            <WeatherData/>
        </div>
    )
}

export default WeatherPage;