import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {

    let PostsData = [
        {id: 1, name: 'Hi, how are you', lickesCount: 12},
        {id: 2, name: 'It is my first post', lickesCount: 11}
    ]

    return (
        <h3 className='postsBlock'>
            My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button> Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={PostsData[0].name} likesCount={PostsData[0].lickesCount}/>
                <Post message={PostsData[1].name} likesCount={PostsData[1].lickesCount}/>

            </div>
        </h3>
    );
}

