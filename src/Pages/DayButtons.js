import { event } from 'jquery';
import styles from './WeatherDays.module.css';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

const selectedDays = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false
}

var hasSelectedDay = false

// This function changes the color of the button when it is clicked
function clicked(event) { 
    const button = event.target;
    button.style.backgroundColor= "rgb(219, 242, 255)";
    button.style.color= "black";
    const dayClicked = button.textContent.toLowerCase()
    selectedDays[dayClicked] = true
    hasSelectedDay = true
    console.log(selectedDays)
}

function WeatherDays() {

    const navigate = useNavigate();

    // This function is called when the user clicks the submit button
    const handleSubmit = (event) => {
      event.preventDefault();

      if(!hasSelectedDay) {
        console.log("You need to select at least 1 day")
        return
      }

      //add to local storage
      let selectedDaysSerialised = JSON.stringify(selectedDays)
      localStorage.setItem("selectedDays", selectedDaysSerialised)

      navigate('../weather_setup');
    };

    return (
      <>
      
      <body className={styles.body}>
        <div className={styles.container}>

          <figure>
            <img src="../images/DayPageIcon.png" alt="weather_icon" className={styles.pic}/>
          </figure>

            <div className={styles.prompt}><h1>Select which days you would like to view forecasts for:</h1></div>

            {/* This is a div that leaves space in between the header and the button grid */}
            <div id={styles.empty}></div>

            <form id={styles.days}><div>

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

              <div id={styles.formfooter}>
                <div><button className={styles.submit}>Clear</button></div>

                {/* This is the submit button where the user submits their information for the next page */}
                <div><button type="button" className={styles.submit} onClick={handleSubmit}>Submit</button></div>
              </div>

              </div></form>

        </div>
          
      </body>
      </>
    );

}

export default WeatherDays;
