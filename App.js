import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = `✓ ${updatedTasks[index]}`;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de tareas pendientes</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Ingrese una nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => handleTaskCompletion(index)}
            style={{ textDecoration: task.startsWith('✓') ? 'line-through' : 'none' }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;