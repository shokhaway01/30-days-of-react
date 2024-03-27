import React from 'react'
import '../Assets/styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      {/* Logotypes place */}
      <div className='logo'>
          <div>
            SW
          </div>
      </div>
      
      {/* Header body */}
      <ul>
        
        <li>
          <a href='#'>Home</a>
        </li>

        <li>
          <a href='#'>About</a>
        </li>

        <li>
          <a href='#'>Github</a>
        </li>

      </ul>
    </div>
  )
}

export default Header