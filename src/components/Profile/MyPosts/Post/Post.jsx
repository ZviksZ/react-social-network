import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png" alt=""/>
                <span>
                    {props.message}
                </span>
                <div>
                    <a href="#g">{props.likeCount}</a>
                </div>

            </div>
    );
}

export default Post;