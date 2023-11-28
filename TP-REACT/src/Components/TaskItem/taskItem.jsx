import React from "react";
import { ListItem, ListItemText, Checkbox, Button } from "@mui/material";

export const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => onToggleComplete()} />
      <ListItemText
        primary={task.text}
        style={{
          //Esto deberia cambiarse a task.completed && "line-through" debido a que none es su valor por defecto.
          textDecoration: task.completed ? "line-through" : "none",
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onDeleteTask()}
      >
        Eliminar
      </Button>
    </ListItem>
  );
};
