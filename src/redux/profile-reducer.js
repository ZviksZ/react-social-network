const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hello', likeCount: 5},
        {id: 2, message: 'it\'s me', likeCount: 12},
        {id: 3, message: 'wow', likeCount: 13},
        {id: 4, message: 'wow2', likeCount: 13},
        {id: 5, message: 'waw', likeCount: 13},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let text = state.newPostText;

            return {
                ...state,
                newPostText: '',
                posts: [ ...state.posts,  {
                    id: state.posts.length + 1,
                    message: text,
                    likeCount: 0
                }],
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})


export default profileReducer;