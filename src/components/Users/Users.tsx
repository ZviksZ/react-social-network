import React     from 'react'
import Paginator from "../common/Paginator/Paginator";
import User      from "./User/User";
import s         from "./Users.module.css";
import {UserType} from "../../types/types";

type PropsType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({users, currentPage, totalUsersCount,pageSize, onPageChanged, followingInProgress, follow, unfollow }) => {

    return (
        <div>
             <Paginator currentPage={currentPage}
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        onPageChanged={onPageChanged}/>

             <div className={s.userList}>
                 {
                     users.map(u => <User key={u.id}
                                                user={u}
                                                followingInProgress={followingInProgress}
                                                follow={follow}
                                                unfollow={unfollow}/>)
                 }
             </div>

        </div>
    )
}

export default Users;
