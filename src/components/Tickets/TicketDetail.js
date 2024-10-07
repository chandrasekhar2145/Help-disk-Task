import React, { useEffect, useState } from "react";
import API from "../../api";
import { Link } from "react-router-dom";

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await API.get("/tickets");
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td><Link to={`/tickets/${ticket._id}`}>{ticket.ticketID}</Link></td>
              <td>{ticket.title}</td>
              <td>{ticket.status}</td>
              <td>{ticket.customerName}</td>
              <td>{new Date(ticket.lastUpdated).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketList;