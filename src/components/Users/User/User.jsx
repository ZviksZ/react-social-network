import React     from 'react'
import {NavLink} from "react-router-dom";
import s         from "./../Users.module.css";
import userPhoto from '../../../assets/images/default_ava.jpg'

const User = ({user, followingInProgress, follow, unfollow}) => {
    
    return (
        <div className={s.userItem}>
                    <div className={s.mainLeft}>

                        <NavLink to={`/profile/${user.id}`} 
                                 activeClassName={s.activeLink}>
                            
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} 
                                 className={s.avatar} 
                                 alt=""/>
                                 
                        </NavLink>

                        {
                            user.followed ?
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => { unfollow(user.id) }}> Unfollow
                                </button>
                                :
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => { follow(user.id) }}> Follow
                                </button>
                        }
                    </div>
                    <div className={s.wrap}>
                        <div className={s.left}>
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                        </div>
                        <div className={s.right}>
                            <div className="">{"user.location.country"}</div>
                            <div className="">{"user.location.city"}</div>
                        </div>
                    </div>
                </div>
        
    )
}

export default User;