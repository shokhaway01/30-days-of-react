import React from 'react'
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.wrapper}>
                <li className={s.direction}><a href="#" className={`${s.item} ${s.active}`}>Profile</a></li>
                <li className={s.direction}><a href="#" className={s.item}>Messages</a></li>
                <li className={s.direction}><a href="#" className={s.item}>News</a></li>
                <li className={s.direction}><a href="#" className={s.item}>Music</a></li>
                <li className={s.direction}><a href="#" className={s.item}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav