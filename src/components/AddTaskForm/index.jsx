import React, { useState } from "react";
import Select from "react-select";
import TimePicker from "../TimePicker";

const AddTaskForm = (addNewTask) => {
  const taskOptions = [
    { value: 1, label: "Dishwasher" },
    { value: 2, label: "Computer" },
    { value: 3, label: "Gaming Computer" },
    { value: 4, label: "Oven" },
  ];

  const [selectedTask, setSelectedTask] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const addNewStartDate = (newStartDate) => {
    setStartDate(prev => new Set(prev.add(newStartDate)))
  }

  const addNewEndDate = (newEndDate) => {
    setEndDate(prev => new Set(prev.add(newEndDate)))
  }

  return (
    <form>
      <label>Task:</label>
      <Select
        defaultValue={selectedTask}
        onChange={setSelectedTask}
        options={taskOptions}
      />
      <label>Start time:</label>
      <TimePicker selectedTime={startDate} setSelectedTime={addNewStartDate} />

      <label>End time:</label>
      <TimePicker selectedTime={endDate} setSelectedTime={addNewEndDate} />

      <input
        type="button"
        value="Add task"
        onClick={(event) =>
          addNewTask.addNewTask.addNewTask(
            event.selectedTask,
            event.startDate,
            event.endDate
          )
        }
      />
    </form>
  );
};

export default AddTaskForm;
