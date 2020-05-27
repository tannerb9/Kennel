import React from "react"
import "./locationCard.css"

const locationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Address:
        </h3>
        <address className="card-location">{props.location.address}</address>
      </div>

    </div>
  )
};

export default locationCard;