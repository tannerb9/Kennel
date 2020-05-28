import React from "react"
import "./ownerCard.css"

const ownerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-owner">{props.owner.name}</span>
        </h3>
        <p>Pet: {props.owner.pet_name}</p>
        <button type="button" onClick={() => props.removeOwner(props.owner.id)}>Remove Client</button>
      </div>
    </div>
  )
};

export default ownerCard;