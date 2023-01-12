import React, { useEffect } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "./style.css";

const TimeLine = (tasks) => {
  const groups = [
    { id: 1, title: "Dishwasher" },
    { id: 2, title: "Computer" },
    { id: 3, title: "Gaming Computer" },
    { id: 4, title: "Oven" },
  ];

  return (
    <div className="price-estimation-page">
      <div>
        <Timeline
          groups={groups}
          items={tasks.tasks}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
          minZoom={360000}
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
        />
      </div>
    </div>
  );
};

export default TimeLine;
