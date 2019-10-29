import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { subscribe, updateNewMessageText, updateNewPostText, addMessage, addPost } from "./redux/state";
import state from "./redux/state";




let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state }
                 addPost={ addPost }
                 addMessage={ addMessage }
                 updateNewMessageText={ updateNewMessageText }
                 updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
