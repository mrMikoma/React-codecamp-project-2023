import React from "react";
import "./style.css";

import AppName from "../AppName/AppName";
import TimeLine from "../TimeLine";
import AddTask from "../AddTask";
import ElectricityPrices from "../ElectricityPrices";

const PriceEstimationPage = () => {
  // Calculate values again when changed
  /*
  useEffect(() => {
    //Runs only on the first render
  }, []);
  */

  return (
    <div className="price-estimation-page">
      <AppName />
      <AddTask />
      <TimeLine />
      <ElectricityPrices />
    </div>
  );
};

export default PriceEstimationPage;
