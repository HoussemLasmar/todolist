import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const editTask = (updatedTask) => {
        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const completeTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const removeTask = (taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter((task) => task.id !== taskId));
        }
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <TaskForm
                addTask={addTask}
                editTask={editTask}
                taskToEdit={taskToEdit}
                setTaskToEdit={setTaskToEdit}
            />
            <TaskList
                tasks={tasks}
                completeTask={completeTask}
                removeTask={removeTask}
                setTaskToEdit={setTaskToEdit}
            />
        </div>
    );
};

export default App;
