import React, { useState, useEffect } from "react";
import EmployeeCard from "./employeeCard";
import Manager from "../../modules/Manager";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return Manager.getAll("employees").then((employees) => {
      setEmployees(employees);
    });
  };

  const terminateEmployee = (id) => {
    Manager.delete("employees", id).then(() =>
      Manager.getAll("employees").then(setEmployees)
    );
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
            terminateEmployee={terminateEmployee}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
