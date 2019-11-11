import React                               from 'react';
import {connect}                           from "react-redux";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer"
import Dialogs                             from "./Dialogs.jsx";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(Dialogs)

export default DialogsContainer;