import React from "react"
import "./employeeCard.css"

const employeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <p>Role: {props.employee.role}</p>
        <button type="button" onClick={() => props.terminateEmployee(props.employee.id)}>Terminate</button>
      </div>
    </div>
  )
};

export default employeeCard;