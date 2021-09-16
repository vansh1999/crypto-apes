import React from "react";

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
    <div>
      <div>
        {name}
      </div>
      <div>
        {symbol}
      </div>
      <div>
        {current_price}
      </div>
      <img src={image} />
      <div>
        {price_change}
      </div>
      <div>
        mrk cap - {market_cap}
      </div>
      <div>
        vol - {total_volume}
      </div>
      <div>------------------</div>
    </div>
  );
};

export default Crypto;
