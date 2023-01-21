import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';



export const MyPosts = (props) => {
    let posts = [
        {id: 1, name: 'Hi, how are you', likesCount: 12},
        {id: 2, name: 'It is my first post', likesCount: 11}
    ]

    let postsElements =
        posts.map( p => <Post message={p.name} likesCount={p.likesCount} />);
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

