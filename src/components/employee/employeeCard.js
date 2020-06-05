import React from "react";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

const employeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <p>Role: {props.employee.role}</p>
        <Link to={`/employees/${props.employee.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/employees/${props.employee.id}/details`);
          }}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => props.terminateEmployee(props.employee.id)}
        >
          Terminate
        </button>
      </div>
    </div>
  );
};

export default employeeCard;
