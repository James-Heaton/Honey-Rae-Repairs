import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Tickets.css";
import { Ticket } from "./Ticket";
import { FilterBar } from "./FilterBar";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }

  // useEffect takes 2 arguments: a function & an array (dependency array)
  useEffect(() => {
    getAndSetTickets()
  }, []); 
  
  // the function is what we want to happen // the array is when it will happen // empty array only runs on initial render of component

  // useEffect(() => {
  //   if (showEmergencyOnly) {
  //     const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
  //     setFilteredTickets(emergencyTickets)
  //   } else if (showNonEmergencyOnly) {
  //     const nonEmergencyTickets = allTickets.filter(ticket => ticket.emergency === false)
  //     setFilteredTickets(nonEmergencyTickets)
  //   } else { setFilteredTickets(allTickets) }
  // }, [showEmergencyOnly, allTickets, showNonEmergencyOnly])

  useEffect(() => {
    if (filterType === "emergency") {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else if (filterType === "nonEmergency") {
      const nonEmergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === false
      );
      setFilteredTickets(nonEmergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [allTickets, filterType]);

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <FilterBar setFilterType={setFilterType} setSearchTerm={setSearchTerm}/>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return <Ticket ticket={ticketObj} currentUser={currentUser} getAndSetTickets={getAndSetTickets} key={ticketObj.id} />;
          })}
        </article>
      </div>
    </>
  );
};
