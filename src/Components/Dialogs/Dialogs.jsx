import React from 'react'
import s from "./dialogs.module.css"

import DialogItem from './DialogItem/DialogItem';
import { Message } from './Message/Message';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {console.log(props)}

                {props.state.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}




            </div>

            <div className={s.messages}>

                {props.state.MessagesData.map((el) => {
                    return <Message message={el.message} />
                })}


            </div>

        </div>
    )
}

export default Dialogs