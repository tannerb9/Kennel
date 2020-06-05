import React, { useState, useEffect } from "react";
import EmployeeCard from "./employeeCard";
import Manager from "../../modules/Manager";
import { removeObj } from "../../helpers/helpers";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return Manager.getAll("employees").then((employees) => {
      setEmployees(employees);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          Create New Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            terminateEmployee={(evt) =>
              removeObj("employees", evt, setEmployees)
            }
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
