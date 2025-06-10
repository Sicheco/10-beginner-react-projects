import React from 'react'
import { useState, useId } from 'react';
import './todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function updateInputValue(event) {
    setInputValue(event.target.value);
  }

  function submitTodo() {
    setTodos((todos) => {
        return todos.concat({
          id: Math.floor(Math.random() * 100),
          text: inputValue
        })
    });

    setInputValue('');
  }

  function submitTodoIfEnter(event) {
    if (event.key === 'Enter') {
      submitTodo();
    }
  }

  function removeTodo(id) {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    })
  }

  return (
    <div className='container'>
       <input type='text' 
       value={inputValue} 
       onChange={updateInputValue}
       onKeyDown={submitTodoIfEnter} 
       placeholder='Enter New Todo' />

       <button onClick={submitTodo}>Submit</button>

       <ul className='todo-list'>
        {todos && todos.map(({id, text}) => (
          <li className='todo' key={id}>
            <span>{text}</span>
            <button className='remove' onClick={() => removeTodo(id)}>Remove</button>
          </li>
        ))}
       </ul>
    </div>
  )
}

export default Todo