import React, { useState } from "react";
import Manager from "../../modules/Manager";
import "../../styles/forms.css";

const OwnerForm = (props) => {
  const [owner, setOwner] = useState({ name: "", pet_name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const setToChange = { ...owner };
    setToChange[evt.target.id] = evt.target.value;
    setOwner(setToChange);
  };

  const constructNewOwner = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    Manager.post("owners", owner).then(() => {
      props.history.push("/owners");
    });
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              id="name"
              onChange={handleFieldChange}
              placeholder="Client name"
            />
            <label htmlFor="client">Client</label>
            <input
              type="text"
              required
              id="pet_name"
              onChange={handleFieldChange}
              placeholder="Pet's name"
            />
            <label htmlFor="pet">Pet's Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm;
