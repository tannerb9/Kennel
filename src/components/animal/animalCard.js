import React from "react";
import { Link } from 'react-router-dom'
import "./animalCard.css"

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-petname">
          {props.animal.name}
        </h3>
        <picture>
          {/* <img src={require(`./${props.animal.pic}`)} alt={props.animal.name} /> */}
        </picture>
        <p>Breed: {props.animal.breed}</p>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => { props.checkoutAnimal(props.animal.id) }}>Check Out</button>
      </div>
    </div>
  );
};

export default AnimalCard;