import React from 'react'
import s from "./dialogs.module.css"

import {NavLink} from "react-router-dom"


let active = (urClass) => urClass.isActive?s.active:s.dialogItem;

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink className={active} to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

let DialogsData = [
    {id:1, name:"Shohjaxon"},
    {id:2, name:"Aleksandr"},
    {id:3, name:"Mamlakat"},
    {id:4, name:"Otabek"},
    {id:5, name:"Shayxislomjon"}
]

let MessagesData = [
    {id:1,message:"Hello"},
    {id:2,message:"Broo whosap"},
    {id:3,message:"yo"},
    {id:4,message:"poshli osh"},
    {id:5,message:"ti ochen bolshoy molodets"}
]


const Dialogs = () => {
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItem}>

       

        {DialogsData.map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}/> )}

            


        </div>

        <div className={s.messages}>

            {MessagesData.map( (el) => {
                return <Message message={el.message}/>
            } )}

          
        </div>

    </div>
  )
}

export default Dialogs