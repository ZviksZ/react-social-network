import React from 'react'
import s     from './Users.module.css';

let usersData = [
    {
        id: 1,
        photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {
            city: 'Minsk',
            country: 'Belarus'
        },
        followed: false
    },
    {
        id: 2,
        photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        fullName: 'Vasya',
        status: 'I am a Vasya',
        location: {
            city: 'Moscow',
            country: 'Russia'
        },
        followed: true
    },
    {
        id: 3,
        photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        fullName: 'Roman',
        status: 'I am a killer',
        location: {
            city: 'Kiev',
            country: 'Ukraine'
        },
        followed: false
    },
    {
        id: 4,
        photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
        fullName: 'Gunter',
        status: 'I am a don',
        location: {
            city: 'Berlin',
            country: 'Germany'
        },
        followed: true
    },
]


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(usersData);
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={s.userItem}>
                    <div>
                        <img src={u.photoUrl} className={s.avatar} alt=""/>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }
                    </div>
                    <div className={s.wrap}>
                        <div className={s.left}>
                            <h3>{u.fullName}</h3>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.right}>
                            <div className="">{u.location.country}</div>
                            <div className="">{u.location.city}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;