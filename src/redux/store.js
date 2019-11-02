const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _subscriber() {
        console.log('state was changed')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello', likeCount: 5},
                {id: 2, message: 'it\'s me', likeCount: 12},
                {id: 3, message: 'wow', likeCount: 13},
                {id: 4, message: 'wow2', likeCount: 13},
                {id: 5, message: 'waw', likeCount: 13},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        navbarPage: {
            friends: [
                {id: 1, name: 'John'},
                {id: 2, name: 'Eddy'},
                {id: 3, name: 'Molly'},
                {id: 4, name: 'CJ'},
                {id: 5, name: 'Alex'},
                {id: 6, name: 'Mark'},
                {id: 7, name: 'Sam'},
            ]
        }
    },
    subscribe(observer) {
        this._subscriber = observer; //наблюдатель // pattern - observer
    },
    getState() {
      return this._state;
    },
    dispatch(action) { // action - объект
        if( action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";

            this._subscriber(this.getState());

        } else if ( action.type === UPDATE_NEW_POST_TEXT ) {

            this._state.profilePage.newPostText = action.text;
            this._subscriber(this.getState());

        } else if ( action.type === ADD_MESSAGE ) {

            let newPost = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newPost);
            this._state.dialogsPage.newMessageText = "";

            this._subscriber(this.getState());

        } else if ( action.type === UPDATE_NEW_MESSAGE_TEXT ) {

            this._state.dialogsPage.newMessageText = action.text;
            this._subscriber(this.getState());

        }
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text})

export const addPostActionCreator = () =>  ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })


export default store;
