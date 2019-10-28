import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { newPostText } from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost } updateNewPostText={updateNewPostText} />
        </BrowserRouter>, document.getElementById('root'));
}

