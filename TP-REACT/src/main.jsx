import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TaskList } from "./Components/TaskList/taskList";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList/>
  </React.StrictMode>,
)
