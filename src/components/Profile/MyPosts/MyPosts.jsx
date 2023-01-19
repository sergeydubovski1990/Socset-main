import React from 'react';
import s from'./MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
      <div>
        My post
        <div>
          <textarea></textarea>
          <button> Add post</button>
        </div>
        <div className={s.posts}>
          <Post message = 'Hi loh' likesCount='23'/>
          <Post message = 'it is my first post' likesCount='20'/>

        </div>
      </div>
    );
}

