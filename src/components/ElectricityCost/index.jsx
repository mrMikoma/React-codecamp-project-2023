import React, { useState } from "react";

const ElectricityCost = ({ tasks }) => {
  const [totalCost, setNewTotalCost] = useState(0.0);

  // Calculates total cost of every task
  const calculateNewTotalElecticityCost = () => {
    let priceValue = 0.0;

    Object.values(tasks).forEach((value) => {
      priceValue += value.value;
      //console.log(value.value); //debug
    });
    setNewTotalCost(priceValue);
    //console.log("New cost is " + totalCost); //debug
  };

  return (
    <div>
      <h3>Your electricity cost: {totalCost}€</h3>
      <button onClick={calculateNewTotalElecticityCost}>TOTAL COST!</button>
    </div>
  );
};
export default ElectricityCost;
