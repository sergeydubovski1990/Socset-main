import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = (props)=> {
    return (
        <div className={s.dialogs}>
                   <div className={s.dialogsItems}>
                       <div className={s.dialog +' ' +s.active}>
                          <NavLink to="/dialogs/1">Sergey</NavLink>
                       </div>
                       <div className={s.dialog}>
                           <NavLink to="/dialogs/2">Sveta</NavLink>
                       </div>
                       <div className={s.dialog}>
                           <NavLink to="/dialogs/3">Sasha</NavLink>
                       </div>
                       <div className={s.dialog}>
                           <NavLink to="/dialogs/4">Ania</NavLink>
                       </div>
                       <div className={s.dialog}>
                           <NavLink to="/dialogs/5">Djoni</NavLink>
                       </div>
                       <div className={s.dialog}>
                           <NavLink to="/dialogs/6">Polli</NavLink>
                       </div>
                       <div className={s.dialog}>
                           <NavLink to="/dialogs/7">Liza</NavLink>
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