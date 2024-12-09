import React from 'react'
import s from "../dialogs.module.css"




export const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
