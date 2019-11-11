import React                        from 'react';
import {connect}                    from "react-redux";
import MyPosts                      from "./MyPosts.jsx";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)

export default MyPostsContainer;