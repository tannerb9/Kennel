import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import AnimalManager from "../../modules/animalManager";
import './animalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", pic: "" })
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() => props.history.push("/animals"));
  };

  useEffect(() => {
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({ name: animal.name, breed: animal.breed, pic: animal.pic });
    });
    setIsLoading(false);
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {
            animal.pic !== "" ?
              <img src={require(`./${animal.pic}`)} alt={animal.name} /> : ""
          }
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Check Out</button>
        <Link to={`/animals`}>
          <button>Return To Animal List</button>
        </Link>
      </div>
    </div>
  )
};

export default AnimalDetail;