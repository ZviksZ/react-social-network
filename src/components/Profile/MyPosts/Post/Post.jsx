import React from 'react';
import s from './Post.module.css';
import Button from '@material-ui/core/Button';

const Post = (props) => {
    
    return (
            <div className={s.item}>
                <img src="https://mdn.mozillademos.org/files/16631/favicon57.de33179910ae.1.1.png" alt=""/>
                <span>
                    {props.message}
                </span>
                <div className={s.likeCount}>
                    <a href="#g" className={s.likes}>Likes: {props.likeCount}</a>
                   <Button size="small" 
                           variant="outlined" 
                           color="secondary" 
                           className={s.deleteBtn}
                           onClick={() => props.deletePost(props.id) }>
                      Delete
                   </Button>
                </div>
                
            </div>
    );
}

export default Post;