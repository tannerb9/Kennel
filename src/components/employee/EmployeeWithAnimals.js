import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import AnimalCard from "../animal/animalCard";

const EmployeeWithAnimals = (props) => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  // This component will display a single employee and include an <AnimalCard>
  // for each animal. We can re-use the previously created AnimalCard component.
  // This component will accept props and return the employee name and then map over
  // the animals returning <AnimalCard> for only the pets the employee is responsible for.
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
