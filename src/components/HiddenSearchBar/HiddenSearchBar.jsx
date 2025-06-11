import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './hiddensearchbar.css';

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  function handleClick(e) {
    toggleSetBackgroundColor('#1a1a1a');

    if (e.target.className === 'container') {
      toggleSetShowInput(false);
      toggleSetBackgroundColor('#fff');
    }
  }

  function toggleSetShowInput(willShowInput) {
    setShowInput(willShowInput);
  }

  function toggleSetBackgroundColor(bgColor) {
    setBackgroundColor(bgColor)
  }

  function toggleShowInput() {
    return <>{showInput ? (
      <input type='text' placeholder='Search' />
      )
      : (
      <FaSearch onClick={() => toggleSetShowInput(true)} />
      )}
    </>
  }

  return (
    <div>
      <section className="container"
        style={{ backgroundColor }}
        onClick={(e) => handleClick(e)}>

        {toggleShowInput()}
      </section>
    </div>
  )
}

export default HiddenSearchBar