import React, { useState, useEffect } from 'react';
import styles from './WelcomePage.module.css';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

    // Allows user to move to next page when clicking the start button
    const navigate = useNavigate();
    const StartButton = (event) => {
        event.preventDefault();
        navigate('../weather_days');
      };

    const [backgroundImage, setBackgroundImage] = useState(''); // State for background image
    const [LocImage, setLocImage] = useState(''); // State for location image
    const [textColor, setTextColor] = useState(''); // State for text color

    // Function to update images and text colours based on time of day
    useEffect(() => {
        const updateBackgroundImage = () => {
          const currentTime = new Date().getHours(); // Get current hour
          let image = '';
          let locimage = '';
          let newTextColor = '';

            // Set background image based on time of day
            if (currentTime >= 5 && currentTime < 12) {
                image = '/images/Day.jpg';
                locimage = '/images/BlackLoc.png';
                newTextColor = 'black';
            } else {
                image = '/images/Night.jpg';
                locimage = '/images/WhiteLoc.png';
                newTextColor = 'white';
            }

            setBackgroundImage(image);
            setLocImage(locimage);
            setTextColor(newTextColor);
        };
    
        updateBackgroundImage(); 
    
        const intervalId = setInterval(updateBackgroundImage, 60 * 60 * 1000); // Update background color every hour
    
        return () => clearInterval(intervalId);
      }, []);

      return (
        // This is the welcome page
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }}>
          <h1 className={`${styles.WelcomeText} ${styles.textColor}`} style={{ color: textColor }}> Welcome</h1>
          <h2 className={`${styles.currentLocText} ${styles.textColor}`} style={{ color: textColor }}>Your current location</h2>
          <img className={styles.locImage} src={LocImage} alt="Location" />
          <h2 className={`${styles.currentLocAnswer} ${styles.textColor}`} style={{ color: textColor }}>Mile End</h2>
          <h3 className={`${styles.London} ${styles.textColor}`} style={{ color: textColor }}>London</h3>
          <button type="button" className={`${styles.Start} ${styles.textColor}`} style={{ color: textColor }} onClick={StartButton}>Start Customisation </button> 
          <p className={styles.fillUp}>.</p>
        </div>
      );

}


export default WelcomePage;