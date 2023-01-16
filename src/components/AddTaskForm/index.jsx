import React, { useState } from "react";
import Select from "react-select";

import Snackbar from "@mui/material/Snackbar";
import TimePicker from "../TimePicker";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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

  /*
  const addNewStartDate = (newStartDate) => {
    setStartDate((prev) => new Set(prev.add(newStartDate)));
  };

  const addNewEndDate = (newEndDate) => {
    setEndDate((prev) => new Set(prev.add(newEndDate)));
  };
  */
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    if (event === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="error" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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

      <input type="button" value="Add task" onClick={handleClick} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Task Added"
        action={action}
      />
    </form>
  );
};

export default AddTaskForm;
