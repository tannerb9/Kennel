import React, { useState } from "react";
import EmployeeManager from "../../modules/employeeManager";
import "../../styles/forms.css";

const EmployeeForm = (props) => {
  const [employee, setEmployee] = useState({ name: "", role: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = (evt) => {
    evt.preventDefault();
    if (employee.name === "" || employee.role === "") {
      window.alert("Please complete all fields.");
    } else {
      setIsLoading(true);
      EmployeeManager.post(employee).then(() =>
        props.history.push("/employees")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="role"
              placeholder="Employee role"
            />
            <label htmlFor="role">Role</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm;
