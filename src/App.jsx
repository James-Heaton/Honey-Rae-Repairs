import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import "./styles/app.css";

export const App = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)

  // useEffect takes 2 arguments: a function & an array (dependency array)
  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []); // the function is what we want to happen // the array is when it will happen // empty array only runs on initial render of component

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button className="filter-btn btn-warning" onClick={() => {setShowEmergencyOnly(true)}}>Emergency</button>
          <button className="filter-btn btn-info" onClick={() => {setShowEmergencyOnly(false)}}>Show All</button>
        </div>
        <article className="tickets">
          {allTickets.map((ticket) => {
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
