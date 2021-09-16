import React from "react";

const Crypto = ({ name, symbol, current_price }) => {
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
      <div>------------------</div>
    </div>
  );
};

export default Crypto;
