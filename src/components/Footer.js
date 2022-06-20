import React from 'react'

const Footer = () => {
  return (
    <div className='footer--wrapper'>
      <div className='footer--wrapper__name'>
        <span>
          &copy; John Katua, 2022
        </span>
      </div>
      <div className='footer--wrapper__src'>
        <a href='/'>Back top</a>
        <a href='/'>Source Code.</a>
      </div>
    </div>
  )
}

export default Footer;