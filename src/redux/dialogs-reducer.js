import {reset} from 'redux-form';

const SEND_MESSAGE = 'my-social-network/dialogs/SEND-MESSAGE';

let initialState = {
   dialogs: [
      {id: 1, name: 'John'},
      {id: 2, name: 'Eddy'},
      {id: 3, name: 'Molly'},
      {id: 4, name: 'CJ'},
      {id: 5, name: 'Alex'},
      {id: 6, name: 'Mark'},
      {id: 7, name: 'Sam'},
   ],
   messages: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Fine'},
      {id: 4, message: 'Yo'},
      {id: 5, message: 'Yo2'},
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messages: [...state.messages, {
               id: state.messages.length + 1,
               message: action.message
            }]
         }
      default:
         return state;
   }
}

export const sendMessageAC = (message) => ({type: SEND_MESSAGE, message})


export const sendMessage = (message) => (dispatch) => {
   dispatch(sendMessageAC(message))

   dispatch(reset('dialogAddMessageForm'));
}


export default dialogsReducer;