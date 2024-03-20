import styles from "./TempAtTime.module.css";

// Component to display temperature at a particular time
function TempAtTime(props){
    return(
        <div className={styles.propTime}>
            <h2>{props.time}</h2>
            <figure>
                <img className={styles.propicon} src="./images/weather-icon.png" width='20%' alt="weather_icon"></img>
            </figure>
            <h2>{props.temp}°C</h2>
        </div>
    )
}

export default TempAtTime