import React                               from 'react';
import s                                   from './Dialogs.module.css';
import DialogItem                          from "./DialogItem/DialogItem";
import Message                             from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer"




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}  id={m.id}/>)

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
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
                    <textarea onChange={onMessageChange}
                              value={props.state.newMessageText}>
                    </textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;