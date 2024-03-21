import styles from "./TempAtTime.module.css";
import React, { useState, useEffect } from 'react';

// Component to display temperature at a particular time
function TempAtTime(props){

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    }, []);

    return(
        <div /*className={styles.propTime}*/ className={`${styles.propTime} ${isVisible ? styles.show : ''}`}>
            <h2 className={styles.time}>{props.time}</h2>
            <figure>
                <img className={styles.weatherIconPic} src="./images/weather-icon.png" width='20%' alt="weather_icon"></img>
            </figure>
            <h2 className={styles.temp}>{props.temp}°C</h2>
        </div>
    )
}
 
export default TempAtTime