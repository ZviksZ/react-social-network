import {authAPI}                       from "../api/api.js";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_LOGOUT = 'LOGIN_LOGOUT';

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
                ...action.data,
                isAuth: true
            }
        case LOGIN_LOGOUT:
            return {
                ...state,
                isAuth: action.isAuthSuccess
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const loginAC = (isAuthSuccess) => ({type: LOGIN_LOGOUT, isAuthSuccess})


export const setAuthUserDataThunk = () => (dispatch) => {
    authAPI.getMyProfile().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    })
}
export const loginMe = (login, password, rememberMe) => (dispatch) => {
    authAPI.login(login, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(loginAC(true));
        } 
    })
}
export const logoutMe = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(loginAC(false));
        } 
    })
}


export default authReducer;