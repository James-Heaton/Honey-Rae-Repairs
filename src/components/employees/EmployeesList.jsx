import "./Employees.css";
import { getStaffUsers } from "../../services/userService";
import { User } from "../../users/Users";
import { useState, useEffect } from "react";

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
        return <User key={employee.id} user={employee} />;
      })}
    </div>
  );
};
