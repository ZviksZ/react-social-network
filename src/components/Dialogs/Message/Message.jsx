import React from 'react';
import s     from './Message.module.css';

const Message = (props) => {
    return <div className={s.message}
                key={props.key}
                id={props.id}>
                {props.message}
            </div>
}

export default Message;