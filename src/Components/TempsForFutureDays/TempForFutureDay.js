import styles from "./TempForFutureDays.module.css";

// This displays the temperature for the future days by taking the day and temperature as props
function TempForFutureDay(props) {
    return(
        <div className={styles.futureCon}>
            <h2>{props.day}</h2>
            <figure>
                <img className={styles.futureIcons} src={props.imageSrc} alt="weather_icon"/>
            </figure>
            <h2 className={styles.futureTemp}>{props.temperature}</h2>
        </div>
    )
}

export default TempForFutureDay;