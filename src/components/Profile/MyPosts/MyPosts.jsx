import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'hello', likeCount: 5},
        {id: 2, message: 'it\'s me', likeCount: 12},
    ];


    let postsElements = postData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (

        <div className={s.my_post}>
            <h3>My posts</h3>
            <div className={s.new_post}>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>

            </div>
            <div className={s.posts}>

                { postsElements }

            </div>
        </div>


    );
}

export default MyPosts;