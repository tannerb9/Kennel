import React, { useState, useEffect } from "react";
import LocationCard from "./locationCard";
import LocationManager from "../../modules/locationManager";

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAll().then(locations => {
      setLocations(locations)
    });
  }

  const removeLocation = id => {
    LocationManager.delete(id).then(LocationManager.getAll().then(setLocations))
  }

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="container-cards">
      {locations.map(location => <LocationCard key={location.id} location={location} removeLocation={removeLocation} />)}
    </div>
  )
};

export default LocationList;