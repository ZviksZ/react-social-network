import React                 from 'react';
import s                     from './Dialogs.module.css';
import DialogItem            from "./DialogItem/DialogItem";
import Message               from "./Message/Message";
import {AddMessageFormRedux} from "./PostForm/PostForm.jsx";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
        
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
               
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    );
}



export default Dialogs;