import React, { useState } from "react";
import LocationManager from "../../modules/locationManager";
import "./locationForm.css";

const LocationForm = (props) => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const changeToState = { ...location };
    changeToState[evt.target.id] = evt.target.value;
    setLocation(changeToState);
  };

  const constructNewLocation = (evt) => {
    evt.preventDefault();
    if (location.name === "" || location.address === "") {
      window.alert("Please complete all fields.");
    } else {
      setIsLoading(true);
      LocationManager.post(location).then(() =>
        props.history.push("/locations")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
