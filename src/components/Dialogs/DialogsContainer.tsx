import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {sendMessage, changeDialog} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import {AppStateType, DialogsPageType} from "../../redux/redux-store";
import {UserType} from "../../types/types";


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessage: (dialogId: number, message: string) => void
    changeDialog: (currentId: number) => void
}

type OwnPropsType = {}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {sendMessage, changeDialog}),
    withAuthRedirect
)(Dialogs);
