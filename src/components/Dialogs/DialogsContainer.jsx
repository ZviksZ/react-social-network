import React                               from 'react';
import {connect}                           from "react-redux";
import {compose}                           from "redux";
import {withAuthRedirect}                  from "../../hoc/withAuthRedirect.js";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer"
import Dialogs                             from "./Dialogs.jsx";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageText, sendMessage}),
    withAuthRedirect
)(Dialogs);