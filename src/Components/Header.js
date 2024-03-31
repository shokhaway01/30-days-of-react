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
                    <li>
                        <a href='https://github.com/shokhaway01?tab=overview&from=2024-03-01&to=2024-03-31'>Home</a>
                    </li>
                    <li>
                        <a href='https://github.com/shokhaway01?tab=overview&from=2024-03-01&to=2024-03-31'>About</a>
                    </li>
                    <li>
                        <a href='https://github.com/shokhaway01?tab=overview&from=2024-03-01&to=2024-03-31'>Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header