import React, { useEffect, useState } from "react";
import AnimalCard from "./animalCard";
import Manager from "../../modules/Manager";
import { removeObj } from "../../helpers/helpers";

const AnimalList = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return Manager.getAll("animals").then((animalsFromAPI) => {
      setAnimals(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
          }}
        >
          Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            checkoutAnimal={(evt) => removeObj("animals", evt, setAnimals)}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default AnimalList;
