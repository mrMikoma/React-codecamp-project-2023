import React from "react";
import Timeline from "react-calendar-timeline";
import "./style.css";
import ElectricityPrices from "../ElectricityPrices";

const TimeLine = (tasks, setNewTask) => {
  const groups = [
    { id: 1, title: "Dishwasher" },
    { id: 2, title: "Computer" },
    { id: 3, title: "Gaming Computer" },
    { id: 4, title: "Oven" },
  ];

  let dayStartDate = Date.now();
  let dayEndDate = Date.now() + 86400000;

  const handleItemMode = (itemId, dragTime, newGroupOrder) => {
    console.log("Moving task...");

    /*
    setNewTask({
      tasks: tasks.map(item =>
        item.id === itemId ?
        Object.assign({}, item, {
          id: tasks.id,
          group: tasks.group,
          title: tasks.title,
          start_time: dragTime,
          end_time: dragTime + 666,
          canMove: true,
        })
        : item
      )
    });
    */
    
    /*
    setNewTask([
      ...tasks,
      ...[
        {
          id: tasks.id,
          group: tasks.group,
          title: tasks.title,
          start_time: dragTime,
          end_time: dragTime + 666,
          canMove: true,
        },
      ],
    ]);
    */

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  return (
    <div className="price-estimation-page">
      <div>
        <ElectricityPrices />
        <Timeline
          groups={groups}
          items={tasks.tasks}
          visibleTimeStart={dayStartDate}
          visibleTimeEnd={dayEndDate}
          minZoom={21600000}
          maxZoom={86400000}
          dragSnap={900000}
          timeSteps={{
            second: 1,
            minute: 15,
            hour: 1,
            day: 1,
            month: 1,
            year: 1,
          }}
          onItemMove={ handleItemMode }
        />
      </div>
    </div>
  );
};

export default TimeLine;
