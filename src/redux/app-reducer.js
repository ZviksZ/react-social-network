import {setAuthUserDataThunk} from "./auth-reducer.js";

const INITIALIZED_SUCCESS = 'my-social-network/app/INITIALIZED_SUCCESS';
const INITIALIZED_LOGOUT = 'my-social-network/app/INITIALIZED_LOGOUT';

let initialState = {
    initialized: false
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
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})
export const initializedLogout = () => ({type: INITIALIZED_LOGOUT})


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserDataThunk());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;