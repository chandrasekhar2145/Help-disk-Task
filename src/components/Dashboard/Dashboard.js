import React, { useEffect, useState } from "react";
import API from "../../api";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [data, setData] = useState({ tickets: 0, customers: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("/admin/stats");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Sidebar />
      <h1>Dashboard</h1>
      <p>Total Tickets: {data.tickets}</p>
      <p>Total Customers: {data.customers}</p>
    </div>
  );
}

export default Dashboard;