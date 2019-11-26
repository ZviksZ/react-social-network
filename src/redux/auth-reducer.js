import {stopSubmit}           from "redux-form";
import {authAPI, securityAPI} from "../api/api.js";

const SET_USER_DATA = 'my-social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-social-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    isFetching: false,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null  //if null, then captcha isn't required
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


export const setAuthUserDataThunk = () => async (dispatch) => {
    let response = await authAPI.getMyProfile()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const loginMe = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        //success, get auth data
        dispatch(setAuthUserDataThunk());
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
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