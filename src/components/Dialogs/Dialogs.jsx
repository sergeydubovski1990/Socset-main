import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



export const Message = (props)=> {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export const DialogItem = (props) => {
    let path="/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Sergey' id='1' />
                <DialogItem name='Sveta' id='2' />
                <DialogItem name='Sasha' id='3' />
                <DialogItem name='Ania' id='4' />
                <DialogItem name='Djoni' id='5' />
                <DialogItem name='Polli' id='6' />
                <DialogItem name='Liza' id='7' />
                <div className={s.dialog}>
                </div>


            </div>
            <div className={s.message}>
                <Message message='Hi' />
                <Message message='What are you wont?' />
                <Message message='Eto ne nashi problemi' />
            </div>
        </div>
    )

}