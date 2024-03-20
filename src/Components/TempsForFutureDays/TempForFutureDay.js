// This displays the temperature for the future days by taking the day and temperature as props
function TempForFutureDay(props) {
    return(
        <div>
            <h2>{props.day}</h2>
            <figure>
                <img src="./images/weather-icon.png" width='20%' alt="weather_icon"/>
            </figure>
            <h2>{props.temperature}</h2>
        </div>
    )
}

export default TempForFutureDay;