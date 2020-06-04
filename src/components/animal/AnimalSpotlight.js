import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import "../../styles/animalSpotlight.css";

const AnimalSpotlight = (props) => {
  const [animal, setAnimal] = useState({ name: "", breed: "", pic: "" });

  useEffect(() => {
    Manager.get("animals", props.animalId).then((animal) => {
      setAnimal({ name: animal.name, breed: animal.breed, pic: animal.pic });
    });
  }, [props.animalId]);

  return (
    <div className="animal-spotlight">
      <div>
        <h3>{animal.name}</h3>
        <picture>
          {animal.pic !== "" ? (
            <img src={require(`./${animal.pic}`)} alt={animal.name} />
          ) : (
            ""
          )}
        </picture>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalSpotlight;
