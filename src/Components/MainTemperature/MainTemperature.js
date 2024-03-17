import styles from "./MainTemperature.module.css";

function MainTemperature(){
    return(
        <div className={styles.MainTemperatureWrapper}>
            <figure>
                <img src="./images/weather-icon.png" alt="cloudy_icon"/>
            </figure>
            <h1>
                13°C
            </h1>
        </div>
    )
}

export default MainTemperature