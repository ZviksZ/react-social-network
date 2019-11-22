import {stopSubmit} from "redux-form";
import {authAPI}    from "../api/api.js";

const SET_USER_DATA = 'my-social-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    isFetching: false,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})


export const setAuthUserDataThunk = () => async (dispatch) => {
    let response = await authAPI.getMyProfile()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginMe = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataThunk());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {
            _error: message
        }))
    }
}

export const logoutMe = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;