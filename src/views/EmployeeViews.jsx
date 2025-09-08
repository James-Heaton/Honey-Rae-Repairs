import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeNav } from "../components/nav/EmployeeNav";
import { Welcome } from "../components/welcome/Welcome";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeesList } from "../components/employees/EmployeesList";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { EmployeeForm } from "../components/forms/EmployeeForm";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <EmployeeNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
          {/* :customerid is a Route Parameter */}
          {/* ends up being a key/value pair */}
          {/* "customerid" is the key and the value will be whatever ends up rendering */}
        </Route>
        <Route path="employees">
          <Route index element={<EmployeesList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
