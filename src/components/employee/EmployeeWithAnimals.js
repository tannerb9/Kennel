import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import AnimalCard from "../animal/animalCard";

const EmployeeWithAnimals = (props) => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    Manager.getWithAnimals("employees", props.match.params.employeeId).then(
      (employee) => {
        setEmployee(employee);
        setAnimals(employee.animals);
      }
    );
  }, []);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} {...props} />
      ))}
    </div>
  );
};

export default EmployeeWithAnimals;
