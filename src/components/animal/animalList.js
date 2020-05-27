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

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
    </div>
  );
};
export default AnimalList;