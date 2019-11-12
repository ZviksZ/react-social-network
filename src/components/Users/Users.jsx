import * as axios from "axios";
import React      from 'react'
import {NavLink}  from "react-router-dom";
import s          from "./Users.module.css";
import userPhoto  from '../../assets/images/default_ava.jpg'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
            <div className={s.pagination}>

                {
                    pages.map(p => {
                        if (p > 30) {
                            return false;
                        }
                        return <span className={props.currentPage === p && s.selectedPage}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })
                }

            </div>
            {
                props.users.map(u => <div key={u.id} className={s.userItem}>
                    <div className={s.mainLeft}>
                        
                        <NavLink to={`/profile/${u.id}`} activeClassName={s.activeLink}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} alt=""/>
                        </NavLink>
                        
                        {
                            u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'ba16c8d0-53dd-46ef-9ba5-993c0e8c9348'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })
                                    
                                }}>
                                    Unfollow
                                </button>
                                :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'ba16c8d0-53dd-46ef-9ba5-993c0e8c9348'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }                                             
                                        })  
                                    
                                }}>
                                    Follow
                                </button>
                        }
                    </div>
                    <div className={s.wrap}>
                        <div className={s.left}>
                            <h3>{u.name}</h3>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.right}>
                            <div className="">{"u.location.country"}</div>
                            <div className="">{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;