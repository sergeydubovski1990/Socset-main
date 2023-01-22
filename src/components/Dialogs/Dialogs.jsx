import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";


export const Dialogs = (props) => {


    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<div className={s.dialog}>
                </div>*/}

            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
        </div>
    )

}
