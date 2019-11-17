import React              from 'react';
import {connect}          from "react-redux";
import {compose}          from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {sendMessage}      from "../../redux/dialogs-reducer"
import Dialogs            from "./Dialogs.jsx";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);