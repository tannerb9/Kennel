import React, { useEffect, useState } from "react";
import AnimalCard from "./animalCard";
import Manager from "../../modules/Manager";

const AnimalList = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return Manager.getAll("animals").then((animalsFromAPI) => {
      setAnimals(animalsFromAPI);
    });
  };

  const checkoutAnimal = (id) => {
    Manager.delete("animals", id).then(() =>
      Manager.getAll("animals").then(setAnimals)
    );
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
            checkoutAnimal={checkoutAnimal}
            {...props}
          />
        ))}
      </div>
    </>
  );
};
export default AnimalList;
