import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationManager from "../../modules/locationManager"
import "./locationDetail.css"

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" })


  useEffect(() => {
    LocationManager.get(props.locationId).then(location => {
      setLocation({ name: location.name, address: location.address })
    })
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>{location.name}</h3>
        <address className="card-location">{location.address}</address>
        <Link to="/locations">
          <button>Return To Locations</button>
        </Link>
      </div>
    </div>
  )
}

export default LocationDetail