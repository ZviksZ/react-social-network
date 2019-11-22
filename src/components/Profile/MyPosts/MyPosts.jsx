import React from 'react';
import s                      from './MyPosts.module.css';
import Post                   from "./Post/Post";
import {AddNewPostFormRedux}  from "./PostForm/PostForm.jsx";


const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map(p => <Post key={p.id}
                                                        id={p.id}
                                                        deletePost={props.deletePost}
                                                        message={p.message}
                                                        likeCount={p.likeCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.my_post}>
            <h3>My posts</h3>
            <div className={s.new_post}>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );

});


export default MyPosts;