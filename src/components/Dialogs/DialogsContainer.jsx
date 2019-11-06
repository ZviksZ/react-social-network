import React                                                         from 'react';
import {connect}                                                     from "react-redux";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import MyPosts                                                       from "../Profile/MyPosts/MyPostsContainer.jsx";
import Dialogs                                                       from "./Dialogs.jsx";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;