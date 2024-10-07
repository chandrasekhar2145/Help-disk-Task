import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/tickets">Tickets</Link>
    </nav>
  );
}

export default Sidebar;