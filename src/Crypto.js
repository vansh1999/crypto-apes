import React from "react";
import "./Crypto.css";

const Crypto = ({
  name,
  symbol,
  current_price,
  image,
  market_cap,
  total_volume,
  price_change
}) => {
  return (
    <div className="crypto-container">
      <div className="crypto-row">
        <div className="name">
          {name}
        </div>
        <div className="symbol">
          {symbol}
        </div>
        <div className="image">
          <img src={image} />
        </div>

        <div className="crypto-data">
          <div className="price">
            ${current_price}
          </div>

          <div>
            {price_change < 0
              ? <div className="percent-change red">
                  {price_change.toFixed(2)}%
                </div>
              : <div className="percent-change green">
                  {price_change.toFixed(2)}%
                </div>}
          </div>

          <div>
            Mkt Cap: ${market_cap.toLocaleString()}
          </div>
          <div>
            Tot Vol: ${total_volume}
          </div>
          <button>Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
