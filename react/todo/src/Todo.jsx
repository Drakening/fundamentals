import React, { useState } from 'react';
import styles from './Todo.module.css';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Todo List</h1>
                
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        className={styles.input}
                    />
                    <button 
                        onClick={addTask}
                        className={`${styles.button} ${styles.addButton}`}
                    >
                        Add
                    </button>
                </div>

                <div className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <div 
                            key={index}
                            className={styles.taskItem}
                        >
                            <span className={styles.taskText}>
                                {task}
                            </span>
                            <div className={styles.buttonGroup}>
                                <button 
                                    onClick={() => moveTaskUp(index)}
                                    className={`${styles.button} ${styles.moveButton}`}
                                    disabled={index === 0}
                                >
                                    ↑
                                </button>
                                <button 
                                    onClick={() => moveTaskDown(index)}
                                    className={`${styles.button} ${styles.moveButton}`}
                                    disabled={index === tasks.length - 1}
                                >
                                    ↓
                                </button>
                                <button 
                                    onClick={() => deleteTask(index)}
                                    className={`${styles.button} ${styles.deleteButton}`}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}
                    {tasks.length === 0 && (
                        <p className={styles.emptyMessage}>
                            No tasks yet. Add some tasks to get started!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Todo;
