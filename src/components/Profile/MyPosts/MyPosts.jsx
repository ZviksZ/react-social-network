import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let sendPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.my_post}>
            <h3>My posts</h3>
            <div className={s.new_post}>
                <div>
                    <p>{props.newPostText}</p>
                    <textarea onChange={onPostChange}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ sendPost }>Add</button>
                </div>

            </div>
            <div className={s.posts}>

                { postsElements }

            </div>
        </div>
    );
}

export default MyPosts;