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
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="container-cards">
      {locations.map(location => <LocationCard key={location.id} location={location} />)}
    </div>
  )
};

export default LocationList;