import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";

const GOOGLE_API_KEY = "AIzaSyCKcH-bWVaa5B2ol6NCShyi463MpqoR_44"; 
const libraries = ["places"]; 
const LocationSearch = ({ onSelectLocation }) => {
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
            onSelectLocation(location); 
          }
        }}
        options={{
          types: ["geocode"],
        }}
        className="border p-2 rounded w-full"
      />
    </LoadScript>
  );
};

export default LocationSearch;
