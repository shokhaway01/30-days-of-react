import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Nav.module.css'


const setActive = ({ isActive }) => isActive ? s.active : s.item;

const Nav = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.wrapper}>
                <li className={s.direction}><NavLink to="/profile" className={setActive}>Profile</NavLink></li>
                <li className={s.direction}><NavLink to="/dialogs" className={setActive}>Dialogs</NavLink></li>
                <li className={s.direction}><NavLink to="/settings" className={setActive}>Settings</NavLink></li>
                <li className={s.direction}><NavLink to="/comuunnity" className={setActive}>Community</NavLink></li>
                <li className={s.direction}><NavLink to="/music" className={setActive}>Music</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav