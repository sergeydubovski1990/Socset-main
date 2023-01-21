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

    let  MessageData = [
        {id: 1, name: 'Dzick-pick'},
    {id: 2, name: 'What are you wont?'},
    {id: 3, name: 'Eto ne nashi problemi'},
    {id: 4, name: 'Ne pishi mne bolshe'},
    {id: 5, name: 'show me your boobs'}
]

    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Ania'},
        {id: 5, name: 'Djoni'},
        {id: 6, name: 'Polli'},
        {id: 7, name: 'Liza'}
    ]
    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
                <div className={s.dialog}>
                </div>


            </div>
            <div className={s.message}>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
                <Message message={MessageData[2].message} />
            </div>
        </div>
    )

}
