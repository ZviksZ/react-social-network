import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={s.my_post}>
            My posts
            <div className={s.new_post}>
                New post
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='hello' likeCount={5}/>
                <Post message="it's me" likeCount={8}/>
            </div>
        </div>



    );
}

export default MyPosts;