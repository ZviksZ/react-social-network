import {setAuthUserDataThunk} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'my-social-network/app/INITIALIZED_SUCCESS';
const INITIALIZED_LOGOUT = 'my-social-network/app/INITIALIZED_LOGOUT';
const SET_GLOBAL_ERROR = 'my-social-network/app/SET_GLOBAL_ERROR';

export type InitialStateType = {
    initialized: boolean,
    globalError: null | string
}

let initialState: InitialStateType = {
    initialized: false,
    globalError: null
};



const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
type InitializedLogoutActionType = {
    type: typeof INITIALIZED_LOGOUT
}
type SetGlobalErrorActionType = {
    type: typeof SET_GLOBAL_ERROR,
    error: any
}
export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})
export const initializedLogout = () :InitializedLogoutActionType => ({type: INITIALIZED_LOGOUT})
export const setGlobalErrorAC = (error: string | null): SetGlobalErrorActionType => ({type: SET_GLOBAL_ERROR, error})

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setAuthUserDataThunk());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export const setGlobalError = (error: any) => (dispatch: any) => {
    dispatch(setGlobalErrorAC(error));

    setTimeout(() => {
        dispatch(setGlobalErrorAC(null))
    }, 3000)
}

export default appReducer;
