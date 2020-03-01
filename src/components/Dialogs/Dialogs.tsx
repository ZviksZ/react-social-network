import React                 from 'react';
import {UserType}            from "../../types/types.js";
import s                     from './Dialogs.module.css';
import DialogItem            from "./DialogItem/DialogItem";
import {AddMessageFormRedux} from "./DialogsForm/DialogsForm.jsx";
import Message               from "./Message/Message";
import {DialogsPageType} from "../../redux/redux-store";


type PropsType = {
   dialogsPage: DialogsPageType
   sendMessage: (dialogId: number, message: string) => void
   changeDialog: (currentId: number) => void
}

const Dialogs: React.FC<PropsType> = ({dialogsPage, changeDialog, sendMessage}) => {
   let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id}
                                                                        changeDialog={changeDialog}
                                                                        name={d.name}
                                                                        id={d.id}/>)

   let messagesElements = dialogsPage.dialogs.map(m => {
      if(dialogsPage.currentDialogId === m.id) {
         return m.messages.map(mess => <Message key={mess.id} message={mess.message} id={mess.id}/>)
      }
   })

   let addNewMessage = (values: any) => {
      if (dialogsPage.currentDialogId) {
         sendMessage(dialogsPage.currentDialogId, values.newMessageText)
      }
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <h4>Dialogs</h4>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div className={s.messagesWrap}>
               {messagesElements}
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
         </div>

      </div>
   );
}


export default Dialogs;
