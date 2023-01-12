import React, { useState } from "react";
import Select from "react-select";
import TimePicker from "../TimePicker";
import IconButton from "@mui/material/IconButton";

const AddTaskForm = (addNewTask) => {
  const taskOptions = [
    { value: 1.5, label: "Dishwasher" },
    { value: 1, label: "Computer" },
    { value: 2, label: "Gaming Computer" },
    { value: 4, label: "Oven" },
  ];

  const [selectedTask, setSelectedTask] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  console.log("täsä")
  console.log(addNewTask.addNewTask.addNewTask);

  return (
    <form>
      <label>Task:</label>
      <Select
        defaultValue={selectedTask}
        onChange={setSelectedTask}
        options={taskOptions}
      />
      <label>Start time:</label>
      <TimePicker selectedTime={startDate} setSelectedTime={setStartDate} />
      <label>End time:</label>
      <TimePicker selectedTime={endDate} setSelectedTime={setEndDate} />

      <input type="button" value="Add task" onClick={addNewTask.addNewTask.addNewTask} />
    </form>
  );
};

export default AddTaskForm;
