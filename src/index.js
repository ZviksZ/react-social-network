import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, message: 'hello', likeCount: 5},
    {id: 2, message: 'it\'s me', likeCount: 12},
    {id: 2, message: 'wow', likeCount: 13},
    {id: 2, message: 'wow2', likeCount: 13},
    {id: 2, message: 'waw', likeCount: 13},
];

let dialogsData = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Eddy'},
    {id: 3, name: 'Molly'},
    {id: 4, name: 'CJ'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Mark'},
    {id: 7, name: 'Sam'},
];

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo2'},
];


ReactDOM.render(<App posts={postData}
                     dialogs={dialogsData}
                     messages={messagesData}/>
                     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
