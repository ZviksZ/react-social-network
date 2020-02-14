import {profileAPI}     from "../api/api";
import {stopSubmit}     from "redux-form";
import {setGlobalError} from "./app-reducer";
import {reset}          from 'redux-form';
import {PhotosType, PostsType, ProfileType} from "../types/types";

const ADD_POST = 'my-social-network/profile/ADD-POST';
const DELETE_POST = 'my-social-network/profile/DELETE_POST';
const SET_USER_PROFILE = 'my-social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'my-social-network/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'my-social-network/profile/SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'hello', likeCount: 5},
        {id: 2, message: 'it\'s me', likeCount: 12},
        {id: 3, message: 'wow', likeCount: 13},
        {id: 4, message: 'wow2', likeCount: 13},
        {id: 5, message: 'waw', likeCount: 13},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: ''
};
type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
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
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos } as ProfileType}

        default:
            return state;
    }
}

//
type AddPostActionType = {
    type: typeof ADD_POST
    post: string
}
export const addPostAC = (post: string):AddPostActionType => ({type: ADD_POST, post})
//
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId:number):DeletePostActionType => ({type: DELETE_POST, postId})
//
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
//
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status})

//
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})
//

export const addPost = (post: string) => (dispatch: any) => {
    dispatch(addPostAC(post));
    dispatch(reset('profileAddNewPostForm'));
}
export const setUserProfileThunk = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data));

}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data));

}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
    catch (e) {
        dispatch(setGlobalError(e.message));
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(setUserProfileThunk(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;
