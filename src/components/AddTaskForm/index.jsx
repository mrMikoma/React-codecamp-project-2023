import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import TimePicker from "../TimePicker";

const AddTaskForm = () => {
  const taskOptions = [
    { value: 1.5, label: "Dishwasher" },
    { value: 1, label: "Computer" },
    { value: 2, label: "Gaming Computer" },
    { value: 4, label: "Oven" },
  ];

  const [taskName, setTaskName] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <form>
      <label>
        Name:
        <input type="text" value={taskName} onChange={setTaskName}/>
      </label>
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
      <input type="submit" value="Add task" />
    </form>
  );
};

export default AddTaskForm;
