import Location from "./Location";
import TomorrowTemp from "./TomorrowTemp/TomorrowTemp";
import Time from "./Time/Time";
import styles from './WeatherHeader.module.css'

function WeatherHeader() {
    return(
        <>
            <div className={styles.WeatherHeader}>
                <TomorrowTemp className="flexbox_element"/>
                <Location className="flexbox_element"/>
                <Time className="flexbox_element"/>
            </div>
        </>
    )
}

export default WeatherHeader;