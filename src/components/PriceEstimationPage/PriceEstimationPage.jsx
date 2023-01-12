import React, { useState, useEffect } from "react";
import "./style.css";
import moment from "moment";

import AppName from "../AppName/AppName";
import TimeLine from "../TimeLine";
import AddTask from "../AddTask";
import ElectricityPrices from "../ElectricityPrices";

const PriceEstimationPage = () => {
  const [tasks, setNewTask] = useState([
    {
      id: 1,
      group: 1,
      title: "item 1",
      start_time: moment(),
      end_time: moment().add(1, "hour"),
      canMove: true,
    },
    {
      id: 2,
      group: 2,
      title: "item 2",
      start_time: moment().add(-0.5, "hour"),
      end_time: moment().add(0.5, "hour"),
      canMove: true,
    },
  ]);

  const addNewTask = () => {
    console.log("Adding new task...")     // debug
    setNewTask([
      ...tasks,
      ...[
        {
          id: 3,
          group: 3,
          title: "item 3",
          start_time: moment().add(-0.5, "hour"),
          end_time: moment().add(0.5, "hour"),
          canMove: true,
        },
      ],
    ]);
    console.log("New task added!")    // debug
    console.log(tasks.tasks);         // debug
  };

  // After new task
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);


  return (
    <div className="price-estimation-page">
      <AppName />
      <AddTask addNewTask={addNewTask} />
      <TimeLine tasks={tasks} />
      <ElectricityPrices />
    </div>
  );
};

export default PriceEstimationPage;
