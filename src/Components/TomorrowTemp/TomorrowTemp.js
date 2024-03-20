import styles from "./TomorrowTemp.module.css";

function TomorrowTemp(props) {
    return(
        <>
            <div>
                <h2>Tomorrow</h2>
                <figure>
                    <img src="./images/cloudy_icon.png" alt="weather_icon" className={styles.image}/>
                </figure>
                <h3>{props.tmrTemp}°C</h3>
            </div>
        </>
    )
}

export default TomorrowTemp;