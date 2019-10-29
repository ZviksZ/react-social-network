let rerenderEntireTree = () => {
    console.log('state was changed')
}

let state = {
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
}


export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

export const updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";

    rerenderEntireTree(state);
}
export const addMessage = () => {
    let newPost = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newPost);
    state.dialogsPage.newMessageText = "";

    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //наблюдатель// pattern - observer
}

export default state;
