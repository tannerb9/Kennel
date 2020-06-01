import React, { useEffect, useState } from 'react';
import AnimalCard from './animalCard';
import AnimalManager from '../../modules/animalManager';

const AnimalList = props => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  const checkoutAnimal = id => {
    AnimalManager.delete(id).then(() => AnimalManager.getAll().then(setAnimals))
  }

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <section className="section-content">
        <button type="button" className="btn" onClick={() => { props.history.push("/animals/new") }}>Admit Animal</button>
      </section>
      <div className="container-cards">
        {animals.map(animal => <AnimalCard key={animal.id} animal={animal} checkoutAnimal={checkoutAnimal} />)}
      </div>
    </>
  );
};
export default AnimalList;