import React from 'react'
import { useState } from 'react'
import './togglebackground.css';

function ToggleBackground() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('#1b1b1b');
  const [buttonStyle, setButtonStyle] = useState('white');

  function setPageStyling() {
    toggleBackgroundColor();
    toggleTextColor();
    toggleButtonStyle();
  }

  function toggleBackgroundColor() {
    setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white');
  }

  function toggleTextColor() {
    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');
  }

  function toggleButtonStyle() {
    setButtonStyle(backgroundColor === 'white' ? '#1b1b1b' : 'white');
  }

  return (
    <div style={{
      backgroundColor,
      color: textColor
    }}>
      <button onClick={() => setPageStyling()} style={{
        buttonStyle,
        color: textColor,
        border: `2px solid ${textColor}`
      }}>
        {backgroundColor === '#1b1b1b' ? 'Black Theme' : 'White Theme'}
      </button>

      <section class="content">
        <h1>Background Toggler</h1>
      </section>
    </div>
  )
}

export default ToggleBackground