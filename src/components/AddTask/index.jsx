import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddTaskForm from "../AddTaskForm";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Overlay from "react-overlay-component";

const AddTask = (addNewTask) => {
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };

  return (
    <div>
      <IconButton
        variant="outlined"
        aria-label="Add task"
        color="success"
        onClick={() => setOverlay(true)}
      >
        <AddHomeWorkIcon />
        Add New Task
      </IconButton>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <AddTaskForm addNewTask={addNewTask} />
      </Overlay>
    </div>
  );
};

export default AddTask;
