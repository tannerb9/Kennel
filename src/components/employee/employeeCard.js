import React from "react"
import "./employeeCard.css"

const employeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">Mark</span>
        </h3>
        <p>Role: Manager</p>
      </div>
    </div>
  )
};

export default employeeCard;