import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleteClick = () => {
    setIsCompleted(!isCompleted);
    onCompleteTask(task.id);
  };

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