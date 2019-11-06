import React                                                         from 'react';
import {connect}                                                     from "react-redux";
import Dialogs                                                       from "../../Dialogs/Dialogs.jsx";
import MyPosts                                                       from "./MyPosts.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator}        from "../../../redux/profile-reducer";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;