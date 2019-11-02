import React                               from 'react';
import s                                   from './Dialogs.module.css';
import DialogItem                          from "./DialogItem/DialogItem";
import Message                             from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store.js"




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);

        props.dispatch( action );
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea onChange={onMessageChange} ref={ newMessageElement } value={props.state.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;