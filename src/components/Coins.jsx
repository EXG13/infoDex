import React, { useState, useEffect } from "react";
import axios from "axios";

function Coins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      });
  }, []);

  return (
    <div id="box" className="container text-center bg-dark text-light">
      <div className="d-flex flex-row gap-5 justify-content-center">
        {coins.map((crypto) => (
          <div className="" key={crypto.id}>
            <h5 className="symbol">{crypto.symbol.toUpperCase()}</h5>
            <h5 className="price">
              {"$" + crypto.current_price.toLocaleString()}
            </h5>
            <h5 className="percentage">
              {crypto.price_change_percentage_24h.toFixed(2) + "%"}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coins;
