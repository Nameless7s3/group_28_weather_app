import styles from "./TempForFutureDays.module.css";
import React, { useState, useEffect } from 'react';

// This displays the temperature for the future days by taking the day and temperature as props
function TempForFutureDay(props) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    }, []);

    return(
        <div /*className={styles.futureCon}*/ className={`${styles.futureCon} ${isVisible ? styles.show : ''}`}>
            <h2 className={styles.futureDate}>{props.day}</h2>
            <figure>
                <img className={styles.futureIcons} src={"/images/weather_icons/" + props.ftrTempWeatherIcon + ".png"} alt={props.ftrTempWeatherDesc}/>
            </figure>
            <h2 className={styles.futureTemp}>{props.temp}°C</h2>
            <h2 className={styles.futureTemp}>{props.temperature}</h2>
        </div>
    )
}

export default TempForFutureDay;