// src/Map.js
import React from 'react';
import { GoogleMap, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { googleMapsAPIKey } from './config';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleMapsAPIKey,
    libraries,
  });

  const [center, setCenter] = React.useState({ lat: 0, lng: 0 });
  const [searchBox, setSearchBox] = React.useState(null);

  const onMapLoad = (map) => {
    map.addListener('bounds_changed', () => {
      setCenter(map.getCenter());
    });
  };

  const onSearchBoxLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places && places.length > 0) {
      const { lat, lng } = places[0].geometry.location;
      setCenter({ lat: lat(), lng: lng() });
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <div>
      
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={options}
        onLoad={onMapLoad}
      />
      <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
        <input type="text" placeholder="Search..." className='form-control' />
      </StandaloneSearchBox>
    </div>
  );
};

export default Map;

