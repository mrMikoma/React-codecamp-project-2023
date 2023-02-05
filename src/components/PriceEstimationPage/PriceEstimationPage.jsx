import React, { useState, useEffect } from "react";
import "./style.css";
import moment from "moment";
import ElectricityPrices from "../ElectricityPrices";
import AppName from "../AppName/AppName";
import TimeLine from "../TimeLine";
import AddTask from "../AddTask";
import ElectricityCost from "../ElectricityCost";

const PriceEstimationPage = () => {
  const [prices, setNewPrices] = useState([]);
  

  const addNewPrices = (newPrices) => {
    //console.log("Hintojaa!: " + newPrices);
    setNewPrices([newPrices]); // ...prices, prices.concat(newPrices)
    //console.log("New prices: " + prices);
  };



  // Example tasks
  const [tasks, setNewTask] = useState([
    {
      id: 1,
      group: 1,
      title: "1,25€",
      value: 1.25,
      start_time: moment().add(1, "hour"),
      end_time: moment().add(2, "hour"),
      canMove: true,
    },
    {
      id: 2,
      group: 2,
      title: "0,85€",
      value: 0.85,
      start_time: moment().add(2, "hour"),
      end_time: moment().add(3, "hour"),
      canMove: true,
    },
    {
      id: 3,
      group: 3,
      title: "2,50€",
      value: 2.50,
      start_time: moment().add(1, "hour"),
      end_time: moment().add(2, "hour"),
      canMove: true,
    },
    {
      id: 4,
      group: 4,
      title: "8,50€",
      value: 8.50,
      start_time: moment().add(3, "hour"),
      end_time: moment().add(4, "hour"),
      canMove: true,
    },
  ]);

  //const [taskId, setTaskId] = useState(3);

  const addNewTask = (groupNumber, startTime, endTime) => {
    console.log("Adding new task..."); // debug
    /*
    console.log(groupNumber);
    console.log(startTime.startTime, "->", endTime.endTime);
    setNewTask([
      ...tasks,
      ...[
        {
          id: taskId,
          group: 4, //groupNumber.groupNumber
          title: "item 3",
          start_time: Date.parse(),
          end_time: moment().add(1.5, "hour"),
          canMove: true,
        },
      ],
    ]);

    setTaskId(taskId + 1);

    console.log(moment()); // debug
    //console.log(moment().add(0.5, "hour")); // debug
    */
    console.log("New task added!"); // debug
  };

  // Recalculate total electcity cost when tasks changes
  useEffect(() => {
    //console.log(tasks);
  }, [tasks]);

  return (
    <div className="price-estimation-page">
      <AppName />
      <ElectricityPrices prices={prices} addNewPrices={addNewPrices} />
      <ElectricityCost tasks={tasks} />
      <AddTask addNewTask={addNewTask} />
      <TimeLine tasks={tasks} setNewTask={setNewTask} />
    </div>
  );
};

export default PriceEstimationPage;