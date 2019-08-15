import React from 'react';
import style from './Users.module.css'
import * as axios from 'axios'
import UserAva from './userFoto/senya.jpg'
const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;

                props.setUsers(response.data.items);
            });
        }
    }
    return <div>
        
        <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div>
        {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>

                        <img src={u.photos.small != null ? u.photos.small : UserAva  } className={style.userPhoto} alt='UserAva' />

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}  >Unfollow</button>

                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users; 