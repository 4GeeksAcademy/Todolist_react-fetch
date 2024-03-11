/*import React, { useEffect, useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


async function fetchData(endpoint){
    const response = await fetch(endpoint);
    const data = await response.json()
    console.log(data);
    setTasks(data)
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify([
  inputValue
]);

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
useEffect( ()=> {
  fetch("https://playground.4geeks.com/apis/fake/todos/user/marc_todo", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
},[setInputValue])




  useEffect( ()=> {
    fetchData("https://playground.4geeks.com/apis/fake/todos/user/marc_todo")
    .then(resp => resp.json)
    .then(resp => console.log(resp));
  },[]) 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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

export default TodoApp;*/