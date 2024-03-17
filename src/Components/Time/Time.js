import styles from './Time.module.css';

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

function getCurrentTime(){
    var currentDate = new Date();
    var formattedMinute = currentDate.getMinutes() < 10 ? "00" + currentDate.getMinutes() : currentDate.getMinutes();
    return currentDate.getHours() + ":" + formattedMinute;
}

export default Time;