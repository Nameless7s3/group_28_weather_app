import React, { useState, useEffect } from 'react';
import styles from './AutoComplete.module.css';

const Autocomplete = () => {
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const handleQueryChange = () => {
      if (!query) {
        setPredictions([]);
        return;
      }

      if (!window.google || !window.google.maps) {
        loadGoogleMapsApi();
      } else {
        initializeAutocomplete();
      }
    };

    const loadGoogleMapsApi = () => {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhRxV4RE3S2B_uMN3J82mFlK6dzNqIhE&libraries=places";
      script.defer = true;
      script.onload = initializeAutocomplete;
      document.body.appendChild(script);
    };

    const initializeAutocomplete = () => {
      const autoCompleteService = new window.google.maps.places.AutocompleteService();

      autoCompleteService.getPlacePredictions(
        { input: query + ' university', types: ['university'] },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPredictions(predictions);
          } else {
            console.error('Error fetching predictions:', status);
          }
        }
      );
    };

    handleQueryChange();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handlePredictionClick = (prediction) => {
    // You can define the action you want to perform when a prediction is clicked
    console.log('Prediction clicked:', prediction);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a university..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <ul className={styles.results}>
        {predictions.map((prediction) => (
            <button className={styles.li} key={prediction.place_id} onClick={() => handlePredictionClick(prediction)}>
                {prediction.description}
                
            </button>

           
          
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
