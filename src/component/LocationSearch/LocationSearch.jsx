import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";

const GOOGLE_API_KEY = "AIzaSyCKcH-bWVaa5B2ol6NCShyi463MpqoR_44"; 
const libraries = ["places"]; 
const LocationSearch = ({ onSelectLocation ,  defaultAddress = "" }) => {
  const [inputValue, setInputValue] = useState(defaultAddress);
  const autocompleteRef = useRef();

  useEffect(() => {
    if (defaultAddress) {
      setInputValue(defaultAddress);
    }
  }, [defaultAddress]);
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
      <Autocomplete
        apiKey={GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          if (place.geometry) {
            const location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              address: place.formatted_address,
            };
            setInputValue(place.formatted_address);
            onSelectLocation(location); 
          }
        }}
        options={{
          types: ["geocode"],
        }}
        className="border p-2 rounded w-full border-red-300"
        ref={autocompleteRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </LoadScript>
  );
};

export default LocationSearch;
