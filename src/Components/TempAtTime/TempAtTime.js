function TempAtTime(props){
    return(
        <div>
            <h2>{props.time}</h2>
            <figure>
                <img src="./weather-icon.png" alt="weather_icon"></img>
            </figure>
            <h2>{props.temp}°C</h2>
        </div>
    )
}

export default TempAtTime