const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {

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