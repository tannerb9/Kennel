import React from "react"
import "./locationCard.css"

const locationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Address:
        </h3>
        <address className="card-location">
          1 Stray Dog Alley
        </address>
      </div>

    </div>
  )
};

export default locationCard;