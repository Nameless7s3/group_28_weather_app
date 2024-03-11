import styles from './WeatherSetup.module.css';

import React, { useState, useEffect } from 'react';




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
  

  return (

    <>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyA_FAELnKYg6T9uKDOvHF253FWaLR9Iaoc"></script>
    <body className={styles.body}>
      <div className={styles.container}>

        <div class="box1">
          <h1>Timings Setter</h1>
          <h1 className={styles.time}>Start Time:</h1>
          <h1 className={styles.time} id = "end">End Time:</h1>
        </div>

        <div class="SliderWrap">
          <input type="range" min="0" max="26" step="1" className={styles.slider}></input>
        </div>
       

        <div className={styles.long} id="one">.</div>
        <div className={styles.long} id="seven">.</div>
        <div className={styles.long} id="thirteen">.</div>
        <div className={styles.long} id="nineteen">.</div>
        <div className={styles.long} id="twentyfive">.</div>

        <div className={styles.short} id="two">.</div>
        <div className={styles.short} id="three">.</div>
        <div className={styles.short} id="four">.</div>
        <div className={styles.short} id="five">.</div>
        <div className={styles.short} id="six">.</div>
        <div className={styles.short} id="eight">.</div>
        <div className={styles.short} id="nine">.</div>
        <div className={styles.short} id="ten">.</div>
        <div className={styles.short} id="eleven">.</div>
        <div className={styles.short} id="twelve">.</div>
        <div className={styles.short} id="fourteen">.</div>
        <div className={styles.short} id="fifteen">.</div>
        <div className={styles.short} id="sixteen">.</div>
        <div className={styles.short} id="seventeen">.</div>
        <div className={styles.short} id="eighteen">.</div>
        <div className={styles.short} id="twenty">.</div>
        <div className={styles.short} id="twentyone">.</div>
        <div className={styles.short} id="twentytwo">.</div>
        <div className={styles.short} id="twentythree">.</div>
        <div className={styles.short} id="twentyfour">.</div>

        <h1 className={styles.smallTime}>12</h1>
        <h1 className={styles.smallTime} id="sixAM">6</h1>
        <h1 className={styles.smallTime} id="twelveAM">12</h1>
        <h1 className={styles.smallTime} id="sixPM">6</h1>
        <h1 className={styles.smallTime} id = "twelvePM">12</h1>

        <h1 className={styles.smalltext}>am</h1>
        <h1 className={styles.smalltext} id="am1">am</h1>
        <h1 className={styles.smalltext} id="pm1">pm</h1>
        <h1 className={styles.smalltext} id="pm2">pm</h1>
        <h1 className={styles.smalltext} id="am2">am</h1>


        <div className={styles.box2}>
          <h1>Campus Finder</h1>
        </div>

        
        <form id="form" role="search">
          <input id = "searching" type="search" name="q" placeholder="Search Campuses..." aria-label="Search through site content"></input>
          <button><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
        </form>
        
        {selectedPlaces.length > 0 && (
          <div>
            <h2>Selected Places:</h2>
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
