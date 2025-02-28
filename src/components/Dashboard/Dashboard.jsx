import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Ensure this file exists

const Dashboard = () => {
  const navigate = useNavigate();
  const user = { name: "Joaquin", email: "joaquin@example.com" };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your crypto portfolio and stay updated.</p>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
