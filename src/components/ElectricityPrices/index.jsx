
import React from "react";

import data from "./day-prices-hours.json";

const ElectricityPrices = (prices, setNewPrices) => {
  console.log(data.prices);
  console.log(setNewPrices);

  //setNewPrices(data.prices);

  const electricityCost = 13.1

  return (
    <div>
      <h2>Add tasks to the timeline and estime your electricity consumption!</h2>
      <h3> Your electricity cost: {electricityCost}€</h3>
    </div>
  );
};

export default ElectricityPrices;
