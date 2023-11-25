import React, { useState } from "react";
import { TaskItem } from "../TaskItem/taskItem";
import { TaskForm } from "../TaskForm/taskForm"
import {
  List,
  Grid,
} from "@mui/material";
import "./taskList.css";


/*LISTA PRINCIPAL*/
export const TaskList = () => {
  const [tasks, setTasks] = useState([]); //hook "useState" para estado de tarea y agregarlas, es el array de tareas basicamenmte.
  //const [newTask, setNewTask] = useState(""); //hook de la nueva tarea.

  //Para el checkbox
  const handleToggle = (index) => {
    const updatedTasks = [...tasks]; /*crea una copia del array que ya tenia (tasks)*/
    updatedTasks[index].completed = !updatedTasks[index].completed; // actualiza la tarea a completada si no lo esta y a no completada si estaba completada. Haciendo click.
    setTasks(updatedTasks); //setea las tareas.
  };

  //agrega un elemento agrega una tarea.
  const handleAddTaskToList = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]); //crea una copia del arrai de tasks con el spread operator y agrega la nueva tarea al final del mismo.
  };

  //elimina el elemento del array (elimina una tarea).
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks]; //crea una copia del array de tasks.
    updatedTasks.splice(index, 1); //Se elimina un elemento del array en la posicion dada (index, 1), cuando se llama a este se le pasa la posicion del elemento a eliminar.
    setTasks(updatedTasks); //se actualiza con setTasks con el nuevo array modificado.
  };

  return (
    //PARTE DEL COMPONENTE A DEVOLVER (TASKLIST).
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <h2>Listado de tareas</h2>
        </Grid>
        <Grid item xs={12}>
          <TaskForm onAddTask={handleAddTaskToList}/*TEXT FORM*/></TaskForm>
        </Grid>
      </Grid>
      <div className="taskContainer">
        <List>
          {tasks.map((taskName, id) => (
            /*Componente de Tarea(TaskItem)*/
            <TaskItem
              key = {id} //la key es el indice de la tarea
              task = {taskName} //la task es el valor en ese indice, en este caso una tarea.
              onToggleComplete = {() => handleToggle(id)} //le pasamos a onToggleComplete la funcion handleToggle(la que se encarga de ver si esta completada o no).
              onDeleteTask = {() => handleDeleteTask(id)} //le pasamos a onDeleteTask la funcion handleDeleteTask.
            />
          ))}
        </List>
      </div>
    </div>
  );
};
