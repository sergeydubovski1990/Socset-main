import React from 'react';
import s from './Post.module.css';

export const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://media.kg-portal.ru/movies/a/avatar2/posters/avatar2_13.jpg'/>
            {props.message}

            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}
