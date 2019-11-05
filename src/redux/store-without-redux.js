import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer  from "./sidebar-reducer";

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
        sidebarPage: {
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
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._subscriber(this.getState());
    }
}

export default store;
