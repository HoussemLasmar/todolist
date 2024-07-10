import React from 'react';

const TaskItem = ({ task, completeTask, removeTask, setTaskToEdit }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => completeTask(task.id)}>
                {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => setTaskToEdit(task)}>Edit</button>
            <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
