import {testAPI} from "../api/api.js";

const DOWNLOAD_PHOTO = 'DOWNLOAD_PHOTO';

let initialState = {
    profile: null,
};

const testReducer = (state = initialState, action) => {

    switch (action.type) {
        case DOWNLOAD_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            };
        default:
            return state;
    }
}

export const updatePhoto = (photo) => ({type: DOWNLOAD_PHOTO, photo});

export const savePhotoThunk = (photo) => (dispatch) => {
    testAPI.uploadProfilePhoto(photo);
};

export default testReducer;