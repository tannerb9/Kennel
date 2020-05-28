import React from "react";
import "./animalCard.css"

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`./${props.animal.pic}`)} alt={props.animal.name} />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;