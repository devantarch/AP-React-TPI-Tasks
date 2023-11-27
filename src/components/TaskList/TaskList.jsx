import TaskItem from "../TaskItem/TaskItem";
import { useEffect } from "react";

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {

  return (
    <div className="task-item">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );

  useEffect(() => {
    const data = window.localStorage.getItem('taskArray')
    if (data != null) setTasks(JSON.parse(data));
  }, []);

  useEffect(() => {
    const data = JSON.stringify(tasks)
    window.localStorage.setItem('taskArray', data)
  }, [tasks]);

};

export default TaskList;