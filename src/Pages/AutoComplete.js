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

  const [selectedPredictions, setSelectedPredictions] = useState([]);

  const handlePredictionClick = (prediction) => {
    setSelectedPredictions(prevPredictions => [...prevPredictions, prediction]);
  };

  const removePlace = index => {
    setSelectedPredictions(prevPlaces => prevPlaces.filter((place, i) => i !== index));
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
      <p>Selected:</p>

      </ul>
      {/* {selectedPrediction && <p>Selected: {selectedPrediction.description}</p>} */}
      {selectedPredictions.map((prediction, index) => (
        <li className={styles.print} key={index}>
          {prediction.description}
          <button className= {styles.delete} onClick={() => removePlace(index)}>x</button>          
          </li>
          
      ))}

    </div>
  );
};

export default Autocomplete;
