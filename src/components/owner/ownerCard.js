import React from "react"
import "./ownerCard.css"

const ownerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-owner">{props.owner.name}</span>
        </h3>
        <p>Number of Dogs: {props.owner.number_of_dogs}</p>
      </div>
    </div>
  )
};

export default ownerCard;