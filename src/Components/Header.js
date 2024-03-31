import React from 'react'

import '../Assets/styles/Header.css'

const Header = () => {
  return (
        <div className='header'>
            <div>
                Logo
            </div>
            <div>
                <ul>
{/*  */}
                    <li>
                        <a href='#'>Home</a>
                    </li>
{/*  */}
                    <li>
                        <a href='#'>About</a>
                    </li>
{/*  */}
                    <li>
                        <a href='#'>Github</a>
                    </li>
{/*  */}
                </ul>
            </div>
        </div>
    )
}

export default Header