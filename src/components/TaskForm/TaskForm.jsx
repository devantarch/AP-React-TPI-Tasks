import { useState } from "react";

// Componente funcional que acepta como propiedad (onAddTask). Nos permite agregar una tarea a la lista.

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

// Usamos el hook useState para crear una variable de estado local (newTask) y se creó setNewTask para actualizar el estado.

  const handleInputChange = event => {
    setNewTask(event.target.value);
  };

  // Definimos una variable para actualizar cuando haya un cambio en el input, actualiza el newTask.

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };
// Definimos una función que se ejecuta al agregar tarea. En caso de que la verifique y no esté vacía llama a onAddTask y le pasa la tarea.
// Luego reinicia el estado y lo pasa a una cadena vacía.

  return (
    <div className="task-form">
      <input type="text" value={newTask} onChange={handleInputChange} className="task-input" placeholder="Ingrese una tarea" />
      <button onClick={handleAddTask} className="btn-form">Agregar Tarea</button>
    </div>
  );
};

// Devuelve el .jsx de la interfaz del formulario. Tiene un campo de entrada de texto y uun botón que activa las funciones anteriores.

export default TaskForm;