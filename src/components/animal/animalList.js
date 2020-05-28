import React, { useEffect, useState } from 'react';
import AnimalCard from './animalCard';
import AnimalManager from '../../modules/animalManager';

const AnimalList = () => {
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
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} animal={animal} checkoutAnimal={checkoutAnimal} />)}
    </div>
  );
};
export default AnimalList;