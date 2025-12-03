/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Autocomplete from "react-google-autocomplete";

const GOOGLE_API_KEY = "AIzaSyCKcH-bWVaa5B2ol6NCShyi463MpqoR_44";

// libraries
const libraries = ["places"];

const LocationSearch = ({ onSelectLocation, defaultAddress = "" }) => {
  const [inputValue, setInputValue] = useState(defaultAddress);
  const autocompleteRef = useRef();

  // useJsApiLoader
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    if (defaultAddress) {
      setInputValue(defaultAddress);
    }
  }, [defaultAddress]);

  const handlePlaceSelected = (place) => {
    if (!place?.geometry) return;

    if (place?.types && place?.types?.includes("country")) return;

    const location = {
      lat: place?.geometry.location.lat(),
      lng: place?.geometry.location.lng(),
      address: place?.formatted_address,
    };
    setInputValue(place?.formatted_address);
    onSelectLocation(location);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Autocomplete
      apiKey={GOOGLE_API_KEY}
      onPlaceSelected={handlePlaceSelected}
      options={{
        types: ["(cities)"],
      }}
      className="border p-2 rounded w-full border-red-300"
      ref={autocompleteRef}
      value={inputValue}
      onChange={(e) => setInputValue(e?.target?.value)}
    />
  );
};

export default LocationSearch;
