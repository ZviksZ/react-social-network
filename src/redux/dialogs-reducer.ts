import {reset} from 'redux-form';

const SEND_MESSAGE = 'my-social-network/dialogs/SEND-MESSAGE';
const CHANGE_CURRENT_DIALOG = 'my-social-network/dialogs/CHANGE_CURRENT_DIALOG';

type MessageType = {
   id: number
   message: string | null
}
type DialogType = {
   id: number
   name: string
   messages: Array<MessageType>
}

let initialState = {
   dialogs: [
      {
         id: 1,
         name: 'John',
         messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Fine'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo2'},
         ]
      },
      {
         id: 2,
         name: 'Alex',
         messages: [
            {id: 1, message: 'What the weather?'},
            {id: 2, message: 'Great?'},
         ]
      },
      {
         id: 3,
         name: 'Molly',
         messages: [
            {id: 1, message: 'How old are you?'},
            {id: 2, message: 'Fine'},
            {id: 3, message: 'I am 30'},
            {id: 4, message: 'Good'},
         ]
      },
      {
         id: 4,
         name: 'Eddy',
         messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'It is my new job'},
            {id: 3, message: 'Fine'},
         ]
      },
   ] as Array<DialogType>,
   currentDialogId: 1 as number | null
};
type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            dialogs: state.dialogs.map(d => {
               if(action.dialogId === d.id) {
                  d.messages.push({
                     id: d.messages.length + 1,
                     message: action.message
                  })
               }
               return d;
            })
         }
      case CHANGE_CURRENT_DIALOG:
         return {
            ...state,
            currentDialogId: action.currentId
         }
      default:
         return state;
   }
}
type SendMessageActionType = {
   type: typeof SEND_MESSAGE
   dialogId: number
   message: string
}
export const sendMessageAC = (dialogId: number, message: string):SendMessageActionType => ({type: SEND_MESSAGE, dialogId, message})

type ChangeDialogActionType = {
   type: typeof CHANGE_CURRENT_DIALOG
   currentId: number
}
export const changeDialog = (currentId: number):ChangeDialogActionType => ({type: CHANGE_CURRENT_DIALOG, currentId})


export const sendMessage = (dialogId: number, message: string) => (dispatch: any) => {
   dispatch(sendMessageAC(dialogId, message))

   dispatch(reset('dialogAddMessageForm'));
}


export default dialogsReducer;
