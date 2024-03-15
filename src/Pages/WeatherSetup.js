import React, { useState, useEffect } from 'react';
import styles from './WeatherSetup.module.css';




function WeatherSetup() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);


  useEffect(() => {
    const searchInput = 'searching';
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyA_FAELnKYg6T9uKDOvHF253FWaLR9Iaoc';
      script.async = true;
      script.onload = initializeAutocomplete;
      document.body.appendChild(script);
    };

    const initializeAutocomplete = () => {
      const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById(searchInput), {
        types: ['geocode'],
      });

      autocomplete.addListener('place_changed', () => {
        const nearPlace = autocomplete.getPlace();
        setSelectedPlaces(prevPlaces => [...prevPlaces, nearPlace]);
      });
    };

    loadGoogleMapsScript();
  }, []);

    const removePlace = index => {
      setSelectedPlaces(prevPlaces => prevPlaces.filter((place, i) => i !== index));
    };


    useEffect(() => {
      const slider = document.querySelector(`.${styles.slider}`);
      const value = document.querySelector(`.${styles.value}`);

      if (slider && value) {
        slider.addEventListener('input', function() {
          value.textContent = slider.value + ":00";
      });

        value.textContent = slider.value + ":00"; // Initialize value
      } 
      
      else {
          console.error("Slider or value element not found.");
      }

    }, [])


    useEffect(() => {

      const slider2 = document.querySelector(`.${styles.slider2}`);
      const value = document.querySelector(`.${styles.value2}`);

      if (slider2 && value) {
        slider2.addEventListener('input', function() {
            value.textContent = slider2.value + ":00";
      });
      
        value.textContent = slider2.value + ":00"; // Initialize value
      } 
      
      else {
          console.error("Slider or value element not found.");
      }
      
    }, [])
    


  return (

    <>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyA_FAELnKYg6T9uKDOvHF253FWaLR9Iaoc"></script>

    <body className={styles.body}>
      <div className={styles.container}>

        <div className={styles.box1}>
          <h1 className={styles.h1}>Timings Setter</h1>
          <figure>
                  <img src="./images/Timing.png" alt="weather_icon" className={styles.TimingPic}/>
              </figure>
          <h1 className={styles.time}>Start Time:</h1>
          <h1 className={styles.time} id={styles.end}>End Time:</h1>
        </div>

        <div className={styles.SliderWrap}>
          <input type="range" min="0" max="24" step="1" className={styles.slider}></input>
          <span className={styles.value}>00:00</span>
        </div>

        <div className={styles.SliderWrap}>
          <input type="range" min="0" max="24" step="1" className={styles.slider2}></input>
          <span className={styles.value2}>00:00</span>
        </div>
       

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


        <div className={styles.box2}>
          <h1 className={styles.h1}>Campus Finder</h1>
          <figure>
            <img src="./images/location.png" alt="weather_icon" className={styles.LocationPic}/>
          </figure>
        </div>

        
        <form id={styles.form} role="search">
          <input id={styles.searching} type="search" name="q" placeholder="Search Campuses..." aria-label="Search through site content"></input>
          <button className={styles.button}><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
        </form>
        
        {selectedPlaces.length > 0 && (
          <div>
            <h2 className={styles.h2}>Selected Places:</h2>
            <ul className={styles.results}>
              {selectedPlaces.map((place, index) => (
                <li key={index}>
                  {place.formatted_address}
                  <button className={styles.delete} onClick={() => removePlace(index)}>x</button>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </body>
    </>
  );
}

export default WeatherSetup;
