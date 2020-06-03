import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import handleFieldChange from "../../helpers/functions";
import "../../styles/forms.css";

const LocationEditForm = (props) => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const updateExistingLocation = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedLocation = {
      id: parseInt(props.match.params.locationId),
      name: location.name,
      address: location.address,
    };

    Manager.update("locations", editedLocation).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    Manager.get("locations", props.match.params.locationId).then((location) => {
      setLocation(location);
      setIsLoading(false);
    });
  }, [props.match.params.locationId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={(evt) => handleFieldChange(evt, location, setLocation)}
              id="name"
              value={location.name}
            />
            <label htmlFor="name">Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={(evt) => handleFieldChange(evt, location, setLocation)}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationEditForm;
