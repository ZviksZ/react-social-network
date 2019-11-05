import React                                                         from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"
import MyPosts                                                       from "../Profile/MyPosts/MyPostsContainer.jsx";
import Dialogs                                                       from "./Dialogs.jsx";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);

        props.store.dispatch( action );
    }
    return ( <Dialogs sendMessage={sendMessage}
                      updateNewMessageText={onMessageChange}
                      dialogsPage={state}/> );
}

export default DialogsContainer;