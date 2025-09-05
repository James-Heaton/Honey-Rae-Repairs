import { CustomerList } from "./components/customers/CustomerList";
import { EmployeesList } from "./components/employees/EmployeesList";
import { TicketList } from "./components/tickets/TicketList";
import { Outlet, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./styles/app.css";
import { NavBar } from "./components/nav/NavBar";
import { Welcome } from "./components/welcome/Welcome";
import { CustomerDetails } from "./components/customers/CustomerDetails";
import { EmployeeDetails } from "./components/employees/EmployeeDetails";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
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
      </Route>
    </Routes>
  );
};
