import React                 from 'react';
import profileReducer        from "./profile-reducer.js";
import {addPost, deletePost} from "./profile-reducer.js";

let state = {
    posts: [
        {id: 1, message: 'hello', likeCount: 5},
        {id: 2, message: 'it\'s me', likeCount: 12},
        {id: 3, message: 'wow', likeCount: 13},
        {id: 4, message: 'wow2', likeCount: 13},
        {id: 5, message: 'waw', likeCount: 13},
    ]
};

it('new post should be incremented', () => {
    //1.test data
    let action = addPost('viks23');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(6);
});

it('message of new post should be viks23', () => {
    //1.test data
    let action = addPost('viks23');
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[5].message).toBe('viks23');
});

it('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});

it('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    //1.test data
    let action = deletePost(1000);
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(5);
});