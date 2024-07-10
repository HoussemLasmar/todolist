import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
    const [task, setTask] = useState({ name: '', description: '' });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name && task.description) {
            if (taskToEdit) {
                editTask(task);
            } else {
                addTask(task);
            }
            setTask({ name: '', description: '' });
            setTaskToEdit(null);
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={task.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
            />
            <button type="submit">{taskToEdit ? 'Update' : 'Add'} Task</button>
        </form>
    );
};

export default TaskForm;

