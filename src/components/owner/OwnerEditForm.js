import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import { handleFieldChange } from "../../helpers/helpers";
import "../../styles/forms.css";

const OwnerEditForm = (props) => {
  const [owner, setOwner] = useState({ name: "", pet_name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const updateExistingOwner = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      pet_name: owner.pet_name,
    };

    Manager.update("owners", editedOwner).then(() =>
      props.history.push("/owners")
    );
  };

  useEffect(() => {
    Manager.get("owners", props.match.params.ownerId).then((owner) => {
      setOwner(owner);
      setIsLoading(false);
    });
  }, [props.match.params.ownerId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-content"
              onChange={(evt) => handleFieldChange(evt, owner, setOwner)}
              id="name"
              value={owner.name}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-content"
              onChange={(evt) => handleFieldChange(evt, owner, setOwner)}
              id="pet_name"
              value={owner.pet_name}
            />
            <label htmlFor="pet_name">Pet Name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingOwner}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerEditForm;
