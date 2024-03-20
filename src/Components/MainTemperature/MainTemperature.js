import styles from "./MainTemperature.module.css";

function MainTemperature(props){
    return(
        <>
        <div className={styles.MainTemperatureWrapper}>
            <figure>
                <img className={styles.MainTempIcon} src="./src/images/weather-icon.png" alt="cloudy_icon"/>
            </figure>
            <h1 className={styles.MainTempReading}>
                {props.currentTemp}°C
            </h1>
        </div></>
    )
}

export default MainTemperature