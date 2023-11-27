import { useState, useEffect } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const App = () => {
 
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
   
      console.log('Lista de tareas actualizada:', tasks);
    
    }, [tasks]);
  

  const toggleComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const addTask = taskName => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    };

  return (
    
    <div className="app-container">
      <div className="content-container">
        <h1> Lista de Tareas
        <FontAwesomeIcon icon={faList} className='icono-lista' />
        </h1> 
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />
      </div>
    </div>
    
  );
};

export default App;