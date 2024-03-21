import styles from "./MainTemperature.module.css";
import React, { useState, useEffect } from 'react';
import icons from "../../weather_icons/01d.png"

// Main temperature component
function MainTemperature(props){

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    }, []);

    return(
        <>
        <div /*className={styles.MainTemperatureWrapper}*/ className={`${styles.MainTemperatureWrapper} ${isVisible ? styles.show : ''}`}>
            <figure>
                <img className={styles.MainTempIcon} src={"/images/weather_icons/" + props.weatherIcon + ".png"} alt={props.weatherDesc}/>
            </figure>
            <h1 className={styles.MainTempReading}>
                {props.currentTemp}°C
            </h1>
        </div></>
    )
}

export default MainTemperature