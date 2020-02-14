import {stopSubmit}           from "redux-form";
import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'my-social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'my-social-network/auth/GET_CAPTCHA_URL_SUCCESS';


/*export type InitialStateType = {
    id: number | null
    isFetching: boolean
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}*/

let initialState = {
    id: null as number | null,
    isFetching: false as boolean,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
};
type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {

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

type SetAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login:string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (id: number | null, email: string | null, login:string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})


type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload:{captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})


export const setAuthUserDataThunk = () => async (dispatch: any) => {
    let response = await authAPI.getMyProfile()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const loginMe = (email: any, password: any, rememberMe: any, captcha: any) => async (dispatch: any) => {
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

export const logoutMe = () => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
       dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;
