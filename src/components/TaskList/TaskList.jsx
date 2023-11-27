import TaskItem from "../TaskItem/TaskItem";

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
};

export default TaskList;