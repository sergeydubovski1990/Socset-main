import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="musik">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="setting">Settings</NavLink>
            </div>
        </nav>)
}


