import React       from 'react';
import FriendsItem from "./FriendsItem/FriendsItem";
import s           from './Friends.module.css';

const Friends = (props) => {
    let friendsElements = props.friends.map(f => <FriendsItem name={f.name} id={f.id}/>)

    return (
        <div className={s.friends}>
            <h3>Friends({props.friends.length})</h3>
            <div className={s.friendsList}>
                { friendsElements }
            </div>
        </div>
    );
}

export default Friends;