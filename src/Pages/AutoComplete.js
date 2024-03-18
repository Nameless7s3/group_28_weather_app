import React, { useState, useEffect } from 'react';
import styles from './AutoComplete.module.css';

const Autocomplete = () => {
  // Defining variables for search results
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState([]);

  // Function to set the search results
  useEffect(() => {
    const handleQueryChange = () => {
      // If the query's empty, predictions are empty
      if (!query) {
        setPredictions([]);
        return;
      }

      if (!window.google || !window.google.maps) { // Load API if it's not already loaded
        loadGoogleMapsApi();
      } else {
        initializeAutocomplete(); // If it's already loaded, initialise autocomplete service
      }
    };

    // Function to load the Google Maps API
    const loadGoogleMapsApi = () => {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzhRxV4RE3S2B_uMN3J82mFlK6dzNqIhE&libraries=places";
      script.defer = true;
      script.onload = initializeAutocomplete;
      document.body.appendChild(script);
    };

    // Function to initialise the autocomplete service
    const initializeAutocomplete = () => {
      const autoCompleteService = new window.google.maps.places.AutocompleteService();

      // Get predictions for current query
      autoCompleteService.getPlacePredictions(
        { input: query + ' university', types: ['university'] },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) { // If the request is successful, set the predictions
            setPredictions(predictions);
          } else {
            console.error('Error fetching predictions:', status); 
          }
        }
      );
    };

    handleQueryChange(); // Calls the function to handle the query change
  }, [query]);

  // Function called when the input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value); // Updates the query state with new input value
  };

  // Holds the selected predictions
  const [selectedPredictions, setSelectedPredictions] = useState([]);

  // Function to handle when prediction clicked
  const handlePredictionClick = (prediction) => {
    setSelectedPredictions(prevPredictions => [...prevPredictions, prediction]); // Adds the selected prediction to the selected predictions
  };

  // Function to remove a place from the selected predictions
  const removePlace = index => {
    setSelectedPredictions(prevPlaces => prevPlaces.filter((place, i) => i !== index)); // Filters out the place at the given index
  };

  return (
    <div>
      {/* This section creates the search bar */}
      <div className={styles.searchBar}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a university..."
          value={query}
          onChange={handleInputChange}
        />
      </div>

      {/* This section creates the search results */}
      <ul className={styles.results}>
        {predictions.map((prediction) => (
            <button type="button" className={styles.li} key={prediction.place_id} onClick={() => handlePredictionClick(prediction)}>
                {prediction.description}
            </button>
        ))}
      <p>Selected:</p>

      </ul>
      
      {/* This section creates the selected predictions */}
      {selectedPredictions.map((prediction, index) => (
        <li className={styles.print} key={index}>
          {prediction.description}
          <button type="button"className= {styles.delete} onClick={() => removePlace(index)}>x</button>          
          </li>
          
      ))}

    </div>
  );
};

export default Autocomplete;
