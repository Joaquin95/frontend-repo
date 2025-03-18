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

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",],
  datasets: [
    {
      label: "Bitcoin Price",
      data: [35000, 38000, 42000, 48000, 50000, 53000, 52000],
      borderColor: "gold",
      backgroundColor: "rgba(255, 215, 0, 0.2)",
      fill: true,
    },
  ],
};  }

return (
  <div className="dashboard">
    {/* Sidebar */}
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li className="active">Dashboard</li>
        <li>Account</li>
        <li>Wallet</li>
        <li>News</li>
        <li>Settings</li>
        <li className="logout" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </li>
      </ul>
    </aside>

    {/* Main Content */}
    <main className="dashboard-main">
      <header>
        <h1>Welcome, {user.name}</h1>
        <p>Total Balance: <strong>$154,610</strong></p>
      </header>

      {/* Crypto Portfolio Cards */}
      <section className="portfolio">
        {portfolio.map((crypto, index) => (
          <div key={index} className="crypto-card">
            {crypto.icon}
            <h3>{crypto.name} ({crypto.symbol})</h3>
            <p>{crypto.price}</p>
            <span>{crypto.change}</span>
          </div>
        ))}
      </section>

      {/* Chart Section */}
      <section className="chart">
        <h2>Bitcoin Price Trend</h2>
        <Line data={chartData} />
      </section>
    </main>
  </div>
);

export default Dashboard;
