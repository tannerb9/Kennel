import React, { useState, useEffect } from "react";
import LocationCard from "./locationCard";
import Manager from "../../modules/Manager";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return Manager.getAll("locations").then((locations) => {
      setLocations(locations);
    });
  };

  const removeLocation = (id) => {
    Manager.delete("locations", id).then(
      Manager.getAll("locations").then(setLocations)
    );
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <section>
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/locations/new");
          }}
        >
          Add New Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            removeLocation={removeLocation}
          />
        ))}
      </div>
    </>
  );
};

export default LocationList;
