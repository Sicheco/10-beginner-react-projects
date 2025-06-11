import React from 'react'
import { useState } from 'react'
import { accordionData } from './data/accordion'
import './accordion.css'

function Accordions() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleIsActive(index) {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  }

  function displayOrHideIcon(index) {
    return (
      <>
        {activeIndex === index ? '-' : '+'}
      </>
    )
  }

  return (
    <div className='accordion'>
      {accordionData.map((accordion, index) => (
        <div className="accordion-card" key={index}>
          <div className="header" onClick={() => toggleIsActive(index)}>
            <div>{accordion.title}</div>
            <p className='icon'>{displayOrHideIcon(index)}</p>
          </div>

          {activeIndex === index && (
            <div className='content'>
              <p className='card-info'>{accordion.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordions