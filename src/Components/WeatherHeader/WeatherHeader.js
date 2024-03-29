import Location from "./Location";
import TomorrowTemp from "../TomorrowTemp/TomorrowTemp";
import Time from "../Time/Time";
import styles from './WeatherHeader.module.css'

// This component displays the header of the weather page using components imported from other files
function WeatherHeader(props) {
    return(
        <>
            <div className={styles.WeatherHeader}>
                <TomorrowTemp className="flexbox_element" tmrTemp={props.tmrTemp} weatherIcon={props.tmrWeatherIcon} weatherDesc={props.tmrWeatherDesc}/>
                <Location className="flexbox_element"  cityName={props.cityName} uniName={props.uniName}/>
                <Time className="flexbox_element"/>
            </div>
        </>
    )
}

export default WeatherHeader;