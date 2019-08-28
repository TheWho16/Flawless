import React from 'react';
import style from './Users.module.css'
import UserAva from './userFoto/senya.jpg'
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pagesCount = (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    
    
    return <div >
        <div className={style.pagesList}>
            <div className={style.buttonsArea}>

                <button
                    disabled={props.currentPage <= 1}
                    onClick={(e) => {
                        if (props.currentPage > 0) { props.onPageChanged(props.currentPage - 1) }
                    }}>LEFT</button>

                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}

                <button
                    disabled={props.currentPage >= 10}
                    onClick={(e) => {
                        if (props.currentPage < 10) { props.onPageChanged(props.currentPage + 1) }
                    }}>Right</button>
            </div>


        </div>
        {

            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : UserAva} className={style.userPhoto} alt='UserAva' />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}  >Unfollow</button>

                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>NAME: {u.name}</div>
                        <div>Status: {u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>

            </div>)
        }
      
    </div >
}



export default Users; 