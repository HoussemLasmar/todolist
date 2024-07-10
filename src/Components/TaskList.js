import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, removeTask, setTaskToEdit }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    setTaskToEdit={setTaskToEdit}
                />
            ))}
        </div>
    );
};

export default TaskList;
