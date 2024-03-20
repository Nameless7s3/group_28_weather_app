import React, { useState, useEffect } from 'react';
import styles from './WeatherSetup.module.css';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import Autocomplete from './AutoComplete';
import { useNavigate } from 'react-router-dom';

//converts a string holding a time to an actual date
function parseTimeString(timeStr) {
  const [hours, minutes] = timeStr.split(":");
  const now = new Date(); // Get the current date
  const timeObject = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  return timeObject;
}


function WeatherSetup() {
  const [globalPredictions, setGlobalPredictions] = useState([]); // State for selected predictions
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

  // This deals with ensuring the user selects a campus before they can proceed to the next page
  const handleSubmit = (event) => {
    event.preventDefault();

    if (globalPredictions.length == 0) {
      alert("Please select a university from the search results.");
      return; // Don't proceed with submission
    }

    if(parseTimeString(startTime) >= parseTimeString(endTime)) {
      alert("Please select a valid time range.");
      return;
    }

    localStorage.setItem("startTime", startTime)
    localStorage.setItem("endTime", endTime)

    navigate('../weather_page');
  };

  // This function allows the user to select the time they want to see the weather using the slider
  useEffect(() => {
  // Get the slider and its value element
    const slider = document.querySelector(`.${styles.slider}`);
    const value = document.querySelector(`.${styles.value}`);

    // Prints the time on the screen
    if (slider && value) {
      slider.addEventListener('input', function() {
        value.textContent = slider.value + ":00";
        setStartTime(value.textContent)
      });

      value.textContent = slider.value + ":00";
    } 
      else {
        console.error("Slider or value element not found.");
    }

  }, []);

  // This function does the same as the previous one but for the second slider
  useEffect(() => {
    // Get the slider and its value element
    const slider2 = document.querySelector(`.${styles.slider2}`);
    const value = document.querySelector(`.${styles.value2}`);

    // Prints the time on the screen
    if (slider2 && value) {
      slider2.addEventListener('input', function() {
        value.textContent = slider2.value + ":00";
        setEndTime(value.textContent)
    });
      
      value.textContent = slider2.value + ":00";
    } 

    else {
        console.error("Slider or value element not found.");
    }
      
  }, [])
    

  return (
    <>
    
    <body className={styles.body}>
      <div className={styles.container}>

        {/* This is the left grey box which displays the section for the user to select their times */}
        <div className={styles.box1}>
          <h1 className={styles.h1}>Timings Setter</h1>
          <figure>
            <img src="./images/Timing.png" alt="weather_icon" className={styles.TimingPic}/>
          </figure>
          <h1 className={styles.time}>Start Time:</h1> {/* This is the earliest time they want to see the weather */}
          <h1 className={styles.time} id={styles.end}>End Time:</h1> {/* This is the lastest time they want to see the weather */}
        </div>

        {/* This displays the sliders for the user to move them both */}
        <div className={styles.SliderWrap}>
          <input type="range" min="0" max="24" step="1" className={styles.slider}></input>
          <span className={styles.value}>00:00</span>
        </div>

        <div className={styles.SliderWrap}>
          <input type="range" min="0" max="24" step="1" className={styles.slider2}></input>
          <span className={styles.value2}>00:00</span>
        </div>
       
        {/* This prints the little black lines and the timings on the slider */}
        <div className={styles.long} id={styles.one}></div>
        <div className={styles.long} id={styles.seven}></div>
        <div className={styles.long} id={styles.thirteen}></div>
        <div className={styles.long} id={styles.nineteen}>.</div>
        <div className={styles.long} id={styles.twentyfive}>.</div>

        <div className={styles.short} id={styles.two}>.</div>
        <div className={styles.short} id={styles.three}>.</div>
        <div className={styles.short} id={styles.four}>.</div>
        <div className={styles.short} id={styles.five}>.</div>
        <div className={styles.short} id={styles.six}>.</div>
        <div className={styles.short} id={styles.eight}>.</div>
        <div className={styles.short} id={styles.nine}>.</div>
        <div className={styles.short} id={styles.ten}>.</div>
        <div className={styles.short} id={styles.eleven}>.</div>
        <div className={styles.short} id={styles.twelve}>.</div>
        <div className={styles.short} id={styles.fourteen}>.</div>
        <div className={styles.short} id={styles.fifteen}>.</div>
        <div className={styles.short} id={styles.sixteen}>.</div>
        <div className={styles.short} id={styles.seventeen}>.</div>
        <div className={styles.short} id={styles.eighteen}>.</div>
        <div className={styles.short} id={styles.twenty}>.</div>
        <div className={styles.short} id={styles.twentyone}>.</div>
        <div className={styles.short} id={styles.twentytwo}>.</div>
        <div className={styles.short} id={styles.twentythree}>.</div>
        <div className={styles.short} id={styles.twentyfour}>.</div>

        <h1 className={styles.smallTime}>12</h1>
        <h1 className={styles.smallTime} id={styles.sixAM}>6</h1>
        <h1 className={styles.smallTime} id={styles.twelveAM}>12</h1>
        <h1 className={styles.smallTime} id={styles.sixPM}>6</h1>
        <h1 className={styles.smallTime} id={styles.twelvePM}>12</h1>

        <h1 className={styles.smalltext}>am</h1>
        <h1 className={styles.smalltext} id={styles.am1}>am</h1>
        <h1 className={styles.smalltext} id={styles.pm1}>pm</h1>
        <h1 className={styles.smalltext} id={styles.pm2}>pm</h1>
        <h1 className={styles.smalltext} id={styles.am2}>am</h1>

        {/* This displays the campus finder in the right grey box */}
        <div className={styles.box2}>
          <h1 className={styles.h1}> Campus Finder </h1>
          
          <figure>
            <img src="./images/location.png" alt="weather_icon" className={styles.LocationPic}/>
          </figure>
        </div>
        
        {/* This allows the user to search for their campus location */}
        <form id={styles.form} role="search">         
          
          <button type="button" className={styles.searchIcon}><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
        

          {/* This calls the page where the search results are made using an API */}
          <Autocomplete setGlobalPredictions={setGlobalPredictions}/>
          {/* This is the submit button where the user submits their information for the next page */}
          <button type="button" className={styles.submitB} required onClick={handleSubmit}>Submit</button>
          
        </form>
        
      </div>

        
    </body>
    </>
  );
};


export default WeatherSetup;
