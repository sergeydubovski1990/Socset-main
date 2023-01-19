import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = (props)=> {
    return (
        <div className={s.dialogs}>
                   <div className={s.dialogsItems}>
                       <div className={s.dialog +' ' +s.active}>
                           Sergey
                       </div>
                       <div className={s.dialog}>
                          Sveta
                       </div>
                       <div className={s.dialog}>
                           Sasha
                       </div>
                       <div className={s.dialog}>
                           Ania
                       </div>
                       <div className={s.dialog}>
                           Djoni
                       </div>
                       <div className={s.dialog}>
                           Polli
                       </div>
                       <div className={s.dialog}>
                           Liza
                       </div>
        </div>
            <div className={s.message}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is you</div>
                <div className={s.dialog}>Go to sleep, bro</div>
            </div>
        </div>
    )

}