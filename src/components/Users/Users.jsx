import React     from 'react'
import s         from "./Users.module.css";
import userPhoto          from '../../assets/images/default_ava.jpg'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    
    return (
        <div>
            <div className={s.pagination}>
                
                {
                    pages.map( p => {
                        if (p > 20) {
                            return false;
                        }
                        return <span className={props.currentPage === p && s.selectedPage}
                                     onClick={ () => { props.onPageChanged(p) }}>{p}</span>
                    })
                }

            </div>
            {
                props.users.map(u => <div key={u.id} className={s.userItem}>
                    <div className={s.mainLeft}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} alt=""/>
                        {
                            u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>
                                    Unfollow
                                </button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
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