import React from 'react'
import s from "./dialogs.module.css"

import DialogItem from './DialogItem/DialogItem';
import { Message } from './Message/Message';

const Dialogs = (props) => {


let sms = React.createRef()

let onChangeMessage = () =>{
    props.updateMessageText(sms.current.value)
    
}

let addMessage = () =>{
    props.addSms(sms)
}


    return (
        <div className={s.dialogs}>

            {/* Тут у нас мапится имена контактов и их айдишки */}
            <div className={s.dialogsItem}>

            
                {props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)}




            </div>


            {/* Тут у нас мапится сообщения */}
            <div className={s.messages}>

                {props.MessagesData.map((el) => {
                    return <Message message={el.message} />
                })}


            </div>



            {/* Тут у нас отслеживается сообщения пользователя, для дальнейшего отображения */}

            <div className={s.messageCreator}>

                <div className={s.creatorBox}>
                    <textarea name="" id="" ref={sms} onChange={onChangeMessage}></textarea>
                </div>

                <div className={s.creatorBtn}>
                    <button onClick={ addMessage }>Send</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs