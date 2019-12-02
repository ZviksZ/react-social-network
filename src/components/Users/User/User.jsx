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
                  <button type="button" className="btn btn-danger btn-sm"
                          disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                             unfollow(user.id)
                          }}> Unfollow
                  </button>
                  :
                  <button type="button" className="btn btn-success btn-sm"
                          disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                             follow(user.id)
                          }}> Follow
                  </button>
            }
         </div>
         <div className={s.wrap}>
            <div className={s.left}>
               <h5>{user.name}</h5>
               <p>{user.status}</p>
            </div>
         </div>
      </div>

   )
}

export default User;