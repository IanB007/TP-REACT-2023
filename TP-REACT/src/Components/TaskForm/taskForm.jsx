import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./taskForm.css";

export const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");
  const [taskAdded, setTaskAdded] = useState(false);

  //efecto secundario al realizar agregado de tarea.
  useEffect(() => {
    if (taskAdded) {
      alert("Tarea agregada :)");
      setTaskAdded(false);
    }
  }, [taskAdded]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
      setTaskAdded(true);
    }
  };

  return (
    <div className="taskForm">
      <TextField
        label="Nueva tarea"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleAddTask()}
        fullWidth
      >
        Agregar Tarea
      </Button>
    </div>
  );
};
