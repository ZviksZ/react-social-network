const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let newPost = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newPost);
            state.newMessageText = "";

            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;

            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text})


export default dialogsReducer;