import React, { useState, useEffect } from 'react';
import EmployeeCard from "./employeeCard";
import EmployeeManager from "../../modules/employeeManager"
import AnimalList from '../animal/animalList';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const getEmployees = () => {

    return EmployeeManager.getAll().then(employees => {
      setEmployees(employees)
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard />)}
    </div>
  );
};

export default EmployeeList
