import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    const changeDialogId = () => {
       props.changeDialog(props.id)
    }
    
    return (
        <div className={s.dialog + " " + s.active} key={props.id}>
            <img src="https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png" alt=""/>
            <NavLink to={path} activeClassName={s.activeLink} onClick={changeDialogId}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;