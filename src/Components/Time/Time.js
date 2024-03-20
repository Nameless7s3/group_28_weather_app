import styles from './Time.module.css';

// This component displays the current time
function Time() {
    return(
        <>
            <div className={styles.Time}>
                <h2>{getCurrentTime()}</h2>
                <figure>
                    <img id='clock_icon' src="./images/clock_icon.png" alt="clock_icon" className={styles.image}/>
                </figure>
            </div>
        </>
    )
}

// Function to get the current time
function getCurrentTime(){
    var currentDate = new Date();
    var formattedMinute = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
    return currentDate.getHours() + ":" + formattedMinute;
}

export default Time;