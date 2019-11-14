import React                               from 'react';
import {connect}                           from "react-redux";
import {Redirect}                          from "react-router-dom";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer"
import Dialogs                             from "./Dialogs.jsx";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect  to={"/login"} />;
    return <Dialogs {...props}/>
}



const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(AuthRedirectComponent)

export default DialogsContainer;