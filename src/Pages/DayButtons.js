import { event } from 'jquery';
import styles from './WeatherDays.module.css';
import { useNavigate } from 'react-router-dom';

function clicked(event) {
    const button = event.target;
    button.style.backgroundColor= "rgb(25, 66, 131)";
    button.style.color= "white";
}

/* function clearButton(event) {
    const buttons = document.querySelectorAll(`.${styles.day}`);
    buttons.forEach(button => {
        button.style.backgroundColor = "#95B9C9";
        button.style.color = "white";
    });
} 
Attempted to revert all buttons to original colours but didn't work so Clear button just refreshes the page now.*/


function WeatherDays() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('../weather_setup');
    };

    return (
      <>
      
      <body className={styles.body}>
        <div className={styles.container}>
        
            <div className={styles.prompt}><h1>Select which days you would like to view forecasts for:</h1></div>

            {/* This is a div that leaves space in between the header and the button grid */}
            <div id={styles.empty}></div>

            <form id={styles.days}>

                {/* This section contains the buttons for the days of the week to be selected */}
                <section id={styles.buttons}><div id={styles.buttons2}>
                <div><button type="button" className={styles.day} onClick={clicked}>Monday</button></div>
                <div><button type="button" className={styles.day} onClick={clicked}>Tuesday</button></div>
                <div><button type="button" className={styles.day} onClick={clicked}>Wednesday</button></div>
                <div><button type="button" className={styles.day} onClick={clicked}>Thursday</button></div>
                <div><button type="button" className={styles.day} onClick={clicked}>Friday</button></div>
                <div></div>
                <div><button type="button" className={styles.day} onClick={clicked}>Saturday</button></div>
                <div></div>
                <div><button type="button" className={styles.day} onClick={clicked}>Sunday</button></div>
                </div></section>

                <div><button /*type="button"*/ className={styles.submit} /*onClick={clearButton}*/>Clear</button></div>

                {/* This is the submit button where the user submits their information for the next page */}
                <div><button type="button" className={styles.submit} onClick={handleSubmit}>Submit</button></div>

            </form>

        </div>
          
      </body>
      </>
    );

}

export default WeatherDays;
