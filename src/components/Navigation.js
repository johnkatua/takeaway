import React from 'react';

const Navigation = () => {
  return (
    <nav className='nav--wrapper'>
      <ul>
        <li>
          <a href='#bio-section'>Bio</a>
        </li>
        <li>
          <a href="#projects-section">Projects</a>
        </li>
        <li>
          <a href='#contact-section'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation