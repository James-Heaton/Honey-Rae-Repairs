import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";

export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  // useEffect takes 2 arguments: a function & an array (dependency array)
  useEffect(() => {
    getAllTickets().then(ticketsArray => {
    setAllTickets(ticketsArray)
  })
  }, []) // the function is what we want to happen // the array is when it will happen // empty array only runs on initial render of component

  

  return <></>;
};
