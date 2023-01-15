import React from "react";

import data from "./day-prices-hours.json";

const ElectricityPrices = (prices, setNewPrices) => {

    console.log(data.prices);
    console.log(setNewPrices)

    //setNewPrices(data.prices);

  return (
    <div>
      <h1>Electricity!</h1>
    </div>
  );
};

export default ElectricityPrices;
