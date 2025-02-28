import React, { useContext } from "react";
import "./Navbar.css";
import cryptogreek from "../../assets/cryptogreek.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyMap = {
    usd: { name: "usd", symbol: "$" },
    eur: { name: "eur", symbol: "€" },
    pesos: { name: "mxn", symbol: "$" },
  };

  const currencyHandler = (e) => {
    setCurrency(currencyMap[e.target.value] || currencyMap.usd);
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={cryptogreek} alt="Cryptogreek Logo" className="cryptogreek" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="pesos">PESOS</option>
        </select>
        <Link to="/signup">
          <button className="signup-button">
            Sign up <img src={arrow_icon} alt="Arrow Icon" />
          </button>
        </Link>
        <Link to="/Login">
          <button className="login-button">
            Login <img src={arrow_icon} alt="Arrow Icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
