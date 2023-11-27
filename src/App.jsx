import { useState, useEffect } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importamos los componentes para poder utilizarlos, y los elementos requeridos de REACT.


// Declara el componente funcional llamado App. 

const App = () => {

  // Con el Hook de use state se crea variable que almacena array de tareas, la función setTasks actualiza ese Array.
   
    const [tasks, setTasks] = useState([]);

    // Se muestra por consola la actualización de lista de tareas.
  
    useEffect(() => {
   
      console.log('Lista de tareas actualizada:', tasks);
    
    }, [tasks]);

    // Buscamos el almacenamiento local de la lista de tareas.

    useEffect(() => {
   
      const data = window.localStorage.getItem('taskList')
      if (data !== null) setTasks(JSON.parse(data))
    
    }, []);

    // Actualizamos el almacenamiento local de la lista de tareas. Estamos tratando de resolver que no guarda el estado "completado",
    // al refrezcar el navegador. Si mantiene el listado de tareas existentes.

    useEffect(() => {
   
      const data = JSON.stringify(tasks)
      window.localStorage.setItem('taskList', data)
    
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