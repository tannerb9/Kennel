import React, { useEffect, useState } from "react";
import Manager from "../../modules/Manager";
import { handleFieldChange } from "../../helpers/helpers";
import "../../styles/forms.css";

const EmployeeEditForm = (props) => {
  const [employee, setEmployee] = useState({ name: "", role: "" });
  const [isLoading, setIsLoading] = useState(false);

  const updateExistingEmployee = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    const editedEmployee = {
      id: props.match.params.employeeId,
      name: employee.name,
      role: employee.role,
    };

    Manager.update("employees", editedEmployee).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    Manager.get("employees", props.match.params.employeeId).then((employee) => {
      setEmployee(employee);
      setIsLoading(false);
    });
  }, [props.match.params.employeeId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={(evt) => handleFieldChange(evt, employee, setEmployee)}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={(evt) => handleFieldChange(evt, employee, setEmployee)}
              id="role"
              value={employee.role}
            />
            <label htmlFor="role">Role</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeEditForm;
