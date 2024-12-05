import React from 'react'
import s from "../dialogs.module.css"
import { NavLink } from "react-router-dom"


let active = (urClass) => urClass.isActive ? s.active : s.dialogItem;


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink className={active} to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem