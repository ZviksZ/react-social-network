import {reset} from 'redux-form';

const SEND_MESSAGE = 'my-social-network/dialogs/SEND-MESSAGE';
const CHANGE_CURRENT_DIALOG = 'my-social-network/dialogs/CHANGE_CURRENT_DIALOG';

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
   ],
   currentDialogId: 1
};

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageAC = (dialogId, message) => ({type: SEND_MESSAGE, dialogId, message})
export const changeDialog = (currentId) => ({type: CHANGE_CURRENT_DIALOG, currentId})


export const sendMessage = (dialogId, message) => (dispatch) => {
   dispatch(sendMessageAC(dialogId, message))

   dispatch(reset('dialogAddMessageForm'));
}


export default dialogsReducer;