import React from 'react'
import { useState } from 'react'
import './counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className='count-container'>
      <h1 className='title'>Counter</h1>
      <h1 className='count'>{count}</h1>

      <div className='button-container'>
        <button className='decrement' onClick={decrementCount}>-</button>
        <button className='increment' onClick={incrementCount}>+</button>
      </div>
    </div>
  )
}

export default Counter