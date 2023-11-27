import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Se declara componente funcional con tres propieadades: tarea, completar y borrar.
const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  // Acá se lleva el control acerca de si está completada
  const handleCompleteClick = () => {
    setIsCompleted(!isCompleted);
    onCompleteTask(task.id);
  };

  // Acá se realiza la eliminación de tareas

  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
    <div className="task-content">
      <span>{task.name}</span>
      <div className="icon-container" >
        <span onClick={handleCompleteClick} className="editar-icono">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span onClick={handleDeleteClick} className="editar-icono">
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </div>
    </div>
  </div>
    );
  };

export default TaskItem;