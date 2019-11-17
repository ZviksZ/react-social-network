import {profileAPI} from "../api/api.js";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'hello', likeCount: 5},
        {id: 2, message: 'it\'s me', likeCount: 12},
        {id: 3, message: 'wow', likeCount: 13},
        {id: 4, message: 'wow2', likeCount: 13},
        {id: 5, message: 'waw', likeCount: 13},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.post,
                    likeCount: 0
                }],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const addPost = (post) => ({type: ADD_POST, post})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})



export const setUserProfileThunk = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }         
    })
}


export default profileReducer;