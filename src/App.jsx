import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import "./styles/app.css";

export const App = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [filterType, setFilterType] = useState("all")
  const [filteredTickets, setFilteredTickets] = useState([])

  // useEffect takes 2 arguments: a function & an array (dependency array)
  useEffect(() => { 
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []); // the function is what we want to happen // the array is when it will happen // empty array only runs on initial render of component

  // useEffect(() => {
  //   if (showEmergencyOnly) {
  //     const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
  //     setFilteredTickets(emergencyTickets)
  //   } else if (showNonEmergencyOnly) {
  //     const nonEmergencyTickets = allTickets.filter(ticket => ticket.emergency === false)
  //     setFilteredTickets(nonEmergencyTickets)
  //   } else { setFilteredTickets(allTickets) }
  // }, [showEmergencyOnly, allTickets, showNonEmergencyOnly])

  useEffect (() => {
    if (filterType === "emergency") {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else if (filterType === "nonEmergency") {
      const nonEmergencyTickets = allTickets.filter(ticket => ticket.emergency === false)
      setFilteredTickets(nonEmergencyTickets)
    } else { setFilteredTickets(allTickets)}
  }, [allTickets, filterType]);

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button className="filter-btn btn-warning" onClick={() => {setFilterType("emergency")}}>Emergency</button>
          <button className="filter-btn btn-primary" onClick={() => {setFilterType("nonEmergency")}}>Non-Emergency</button>
          <button className="filter-btn btn-info" onClick={() => {setFilterType("all")}}>Show All</button>
        </div>
        <article className="tickets">
          {filteredTickets.map((ticket) => {
            return (
              <section className="ticket" key={ticket.id}>
                <header className="ticket-info">#{ticket.id}</header>
                <div>{ticket.description}</div>
                <footer>
                  <div>
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                  </div>
                </footer>
              </section>
            );
          })}
        </article>
      </div>
    </>
  );
};
  