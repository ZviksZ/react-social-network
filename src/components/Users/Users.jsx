import React     from 'react'
import Paginator from "../common/Paginator/Paginator.jsx";
import User      from "./User/User.jsx";
import s         from "./Users.module.css";

const Users = (props) => {

    return (
        <div>
             <Paginator currentPage={props.currentPage}
                        totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged}/>
             
             <div className={s.userList}>
                 {
                     props.users.map(u => <User key={u.id}
                                                user={u}
                                                followingInProgress={props.followingInProgress}
                                                follow={props.follow}
                                                unfollow={props.unfollow}/>)
                 }
             </div>
            
        </div>
    )
}

export default Users;