import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import "../../styles/forms.css";

const AnimalEditForm = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", pic: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedAnimal = {
      id: parseInt(props.match.params.animalId),
      name: animal.name,
      breed: animal.breed,
      pic: animal.pic
    };

    Manager.update("animals", editedAnimal)
      .then(() =>
        props.history.push("/animals")
      );
  };

  useEffect(() => {
    Manager.get("animals", props.match.params.animalId).then((animal) => {
      setAnimal(animal);
      setIsLoading(false);
    });
  }, [props.match.params.animalId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
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

export default AnimalEditForm;
