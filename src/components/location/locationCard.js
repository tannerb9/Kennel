import React from "react"
import { Link } from "react-router-dom"
import "./locationCard.css"

const locationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.location.name}</h3>
        <address className="card-location">{props.location.address}</address>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.removeLocation(props.location.id)}>Remove Location</button>
      </div>
    </div>
  )
};

export default locationCard;