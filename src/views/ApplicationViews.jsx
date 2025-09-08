import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/EmployeeNav";
import { Welcome } from "../components/welcome/Welcome";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeesList } from "../components/employees/EmployeesList";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForm";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObj = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObj);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser} />
  );
};
