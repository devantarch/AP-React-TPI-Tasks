import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = event => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="task-form">
      <input type="text" value={newTask} onChange={handleInputChange} className="task-input" placeholder="Ingrese una tarea" />
      <button onClick={handleAddTask} className="btn-form">Agregar Tarea</button>
    </div>
  );
};

export default TaskForm;