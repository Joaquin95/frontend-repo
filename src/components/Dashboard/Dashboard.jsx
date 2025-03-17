import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBitcoin, FaEthereum, FaTether, FaSignOutAlt } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import "./Dashboard.css"; 

const Dashboard = () => {
  const navigate = useNavigate();
  const user = { name: "Joaquin", email: "joaquin@example.com" };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const portfolio = [
    { name: "Bitcoin", symbol: "BTC", price: "$52,291", change: "+0.25%", icon: <FaBitcoin color="gold" /> },
    { name: "Ethereum", symbol: "ETH", price: "$28,291", change: "+0.15%", icon: <FaEthereum color="blue" /> },
    { name: "Tether", symbol: "USDT", price: "$1.00", change: "+0.02%", icon: <FaTether color="green" /> },
  ];

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
