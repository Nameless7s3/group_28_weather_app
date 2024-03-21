import styles from "./MainTemperature.module.css";
import React, { useState, useEffect } from 'react';

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
                <img className={styles.MainTempIcon} src="./images/weather-icon.png" alt="cloudy_icon"/>
            </figure>
            <h1 className={styles.MainTempReading}>
                {props.currentTemp}°C
            </h1>
        </div></>
    )
}

export default MainTemperature