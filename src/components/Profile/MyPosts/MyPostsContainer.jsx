import React        from 'react';
import {connect}    from "react-redux";
import MyPosts      from "./MyPosts.jsx";
import {addPost, deletePost}    from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, deletePost})(MyPosts)

export default MyPostsContainer;