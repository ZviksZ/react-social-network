import {setAuthUserDataThunk} from "./auth-reducer.js";

const INITIALIZED_SUCCESS = 'my-social-network/app/INITIALIZED_SUCCESS';
const INITIALIZED_LOGOUT = 'my-social-network/app/INITIALIZED_LOGOUT';
const SET_GLOBAL_ERROR = 'my-social-network/app/SET_GLOBAL_ERROR';

let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case INITIALIZED_LOGOUT:
            return {
                ...state,
                initialized: false
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializedLogout = () => ({type: INITIALIZED_LOGOUT})
export const setGlobalErrorAC = (error) => ({type: SET_GLOBAL_ERROR, error})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserDataThunk());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export const setGlobalError = (error) => (dispatch) => {
    dispatch(setGlobalErrorAC(error));
    
    setTimeout(() => {
        dispatch(setGlobalErrorAC(null))
    }, 3000)
}

export default appReducer;