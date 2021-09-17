import logo from "./logo.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Crypto from "./Crypto";

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api refresh after every 5sec!");

      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then(res => {
          console.log(res.data);
          setCrypto(res.data);
        })
        .catch(err => {
          alert("Something went wrong!");
        });
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  // filter crypto with search value
  // filter using normal function we can use {} but need return
  // const filterCrypto = crypto.filter(function (cr)
  //  {
  //   return cr.name.toLowerCase().includes(search.toLowerCase())
  //  }
  // )
  // using arrow function
  const filterCrypto = crypto.filter(cr =>
    cr.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("filter", filterCrypto);

  return (
    <div className="page">
      <div className="container">
        <h1>crypto apes</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Seach Cryptocurrency"
            onChange={handleChange}
          />
        </div>
      </div>

      {filterCrypto.map(fc => {
        return (
          <Crypto
            key={fc.id}
            name={fc.name}
            symbol={fc.symbol}
            current_price={fc.current_price}
            image={fc.image}
            market_cap={fc.market_cap}
            total_volume={fc.total_volume}
            price_change={fc.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
