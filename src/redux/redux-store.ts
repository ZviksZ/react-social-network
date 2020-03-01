import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import appReducer               from "./app-reducer";
import authReducer              from "./auth-reducer";
import dialogsReducer           from "./dialogs-reducer";
import profileReducer           from "./profile-reducer";
import sidebarReducer           from "./sidebar-reducer";
import todosReducer             from "./todos-reducer";
import usersReducer             from "./users-reducer";
import thunkMiddleware          from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

type RootReducerType = typeof rootReducer;
type DialogsPageReducerType = typeof dialogsReducer;
export type AppStateType = ReturnType<RootReducerType>
export type DialogsPageType = ReturnType<DialogsPageReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store;
export default store;
