import "./Employees.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/Users";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employee) => {
        return (
          <Link to={`/employees/${employee.id}`}>
            <User key={employee.id} user={employee} />
          </Link>
        );
      })}
    </div>
  );
};
