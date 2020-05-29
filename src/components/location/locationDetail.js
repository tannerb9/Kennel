import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationManager from "../../modules/locationManager"
import "./locationDetail.css"

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" })
  const [isLoading, setIsLoading] = useState(true)

  const handleDelete = () => {
    setIsLoading(true)
    LocationManager.delete(props.locationId).then(() => props.history.push("/locations"));
  }
  useEffect(() => {
    LocationManager.get(props.locationId).then(location => {
      setLocation({ name: location.name, address: location.address })
    })
    setIsLoading(false)
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>{location.name}</h3>
        <address className="card-location">{location.address}</address>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Remove Location</button>
        <Link to="/locations">
          <button>Return To Locations</button>
        </Link>
      </div>
    </div>
  )
}

export default LocationDetail