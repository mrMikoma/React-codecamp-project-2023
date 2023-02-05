import React, { useState, useEffect } from "react";
import { Prices } from "nordpool";
//import data from "./day-prices-hours.json";

const ElectricityPrices = ({ prices, addNewPrices }) => {
  const elecPrices = new Prices();
  const pricesArray = [];

  /*
  REQUIRES: 'Moesif Origin & CORS Changer' Set on ON in order to work!
  LINK: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc
  */
  const printHourlyConsumerPrices = async () => {
    const results = await elecPrices.hourly({ area: "FI" });

    for (const item of results) {
      // item.date is an ISO Date-Time
      // (see https://www.ecma-international.org/ecma-262/11.0/#sec-date-time-string-format)
      // use Date object to format
      const date = new Date(item.date); // automatically in your local timezone
      const hour = date.getHours().toString().padStart(2, "0").concat(":00");

      // item.value is the energy price in EUR/MWh
      // convert it to snt/kWh and add Finnish VAT of 24 %
      const price = Math.round(item.value * 1.24 * 100) / 1000;

      var row = `${hour}\t${price.toFixed(3)} snt/kWh`;
      console.log(row);

      // adding new price to the useState price hook
      pricesArray.push({
        hour: hour,
        price: price.toFixed(3),
      });
    }
    addNewPrices(pricesArray);
    console.log("NEW PRICES: " + prices);
  };

  return (
    <div>
      <h2>
        Add tasks to the timeline and estime your electricity consumption!
      </h2>
      <button onClick={printHourlyConsumerPrices}>PRICES!</button>
    </div>
  );
};

export default ElectricityPrices;
