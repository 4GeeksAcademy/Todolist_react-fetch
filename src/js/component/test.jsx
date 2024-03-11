import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const endpoint = 'https://playground.4geeks.com/apis/fake/todos/user/marc_todo';
    const response = await fetch(endpoint);
    const data = await response.json();
    setTasks(data);
  };

  const saveDataToApi = async (data_api) => {
    try {
      const endpoint = 'https://playground.4geeks.com/apis/fake/todos/user/marc_todo';
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_api),
      };
      
      await fetch(endpoint, options);
    } catch (error) {
      console.error('Error al actualizar en la API:', error);
    }
  };

  const deleteDataFromApi = async () => {
    try {
      const endpoint = 'https://playground.4geeks.com/apis/fake/todos/user/marc_todo';
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await fetch(endpoint, options);
    } catch (error) {
      console.error('Error al eliminar en la API:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTasks = [...tasks, { label: inputValue, done: false }];
      setTasks(newTasks);
      saveDataToApi(newTasks);
      setInputValue('');
    }
  };

  const handleDeleteTask = async (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    await deleteDataFromApi();
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Añadir tarea..."
        />
        <button onClick={handleAddTask}>Añadir</button>
      </div>
      <div className='tarea'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.label}
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
