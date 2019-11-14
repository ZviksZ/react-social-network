import React     from 'react';
import {NavLink} from 'react-router-dom';
import s         from './FriendsItem.module.css';

const FriendsItem = (props) => {

    let path = "/profile/" + props.id;

    return (
        <div className={s.item} id={props.id}>
            <img src="https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png" alt=""/>

            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default FriendsItem;