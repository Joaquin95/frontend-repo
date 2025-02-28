import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency, setCurrency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    const { value } = e.target;
    setInput(value);

    if (!value) {
      setDisplayCoin(allCoin);
    }
  };

  // Filter the coins based on the search input^^

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
    // Update displayCoin with the filtered coins^^
  };

  useEffect(() => {
    setDisplayCoin(allCoin || []); // Ensure no errors if allCoin is undefined
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          My First Crypto Marketplace Project
        </h1>
        <p>
          Welcome to the world's best cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search Crypto..."
            required
          />
          <datalist id="coinlist">{allCoin.map((item, index) => (<option key={index} value={item.name}/>))}</datalist>


          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hr Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displayCoin.slice(0, 50).map((item) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={item.market_cap_rank || item.id}>
            <p>{item.market_cap_rank || "N/A"}</p>
            <div>
              <img src={item.image} alt={item.name || "Crypto"} />
              <p>{`${item.name || "Unknown"} - ${
                item.symbol?.toUpperCase() || ""
              }`}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price?.toLocaleString() || "N/A"}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0 ? "positive" : "negative"
              }
            >
              {item.price_change_percentage_24h?.toFixed(2) || "0.00"}%
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap?.toLocaleString() || "N/A"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
