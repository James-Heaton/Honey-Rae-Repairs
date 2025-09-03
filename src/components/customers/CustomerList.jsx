import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService";
import "./Customers.css"
import { User } from "../../users/Users";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customer) => {
        return <User key={customer.id} user={customer}/>
      })}
    </div>
  );
};
