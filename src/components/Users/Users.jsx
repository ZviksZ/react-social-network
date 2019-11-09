import React, {Component} from 'react'
import s                  from './Users.module.css';
import * as axios         from 'axios'
import userPhoto          from '../../assets/images/default_ava.jpg'


class Users extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id} className={s.userItem}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar} alt=""/>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow</button>
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
}


export default Users;