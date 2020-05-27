import React from "react"
import "./ownerCard.css"

const ownerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-owner">Terry</span>
        </h3>
        <p>Number of Dogs: 1</p>
      </div>
    </div>
  )
};

export default ownerCard;