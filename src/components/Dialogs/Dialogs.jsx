import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";

let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Ania'},
    {id: 5, name: 'Djoni'},
    {id: 6, name: 'Liza'}
];

let Messages = [
    {id: 1, name: 'Dzick-pick'},
    {id: 2, name: 'What are you wont?'},
    {id: 3, name: 'Eto ne nashi problemi'},
    {id: 4, name: 'Ne pishi mne bolshe'},
    {id: 5, name: 'show me your boobs'}
]

let messagesElements = Messages.map(m => <Message message={m.message}/>)
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.dialog}>
                </div>

            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
        </div>
    )

}
