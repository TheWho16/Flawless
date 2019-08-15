import React from 'react';
import style from './Users.module.css'
import * as axios from 'axios'
import UserAva from './userFoto/senya.jpg'



class Users extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
            .then(response => {
                debugger;

                this.props.setUsers(response.data.items);
            });
    }




    onPageChanged = (pageNumber) => {
        this.props.setcurrentPage(pageNumber);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
            .then(response => {
                debugger;

                this.props.setUsers(response.data.items);
            });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && style.selectedPage}
                        onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}

            </div>
            {

                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>

                            <img src={u.photos.small != null ? u.photos.small : UserAva} className={style.userPhoto} alt='UserAva' />

                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}  >Unfollow</button>

                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

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
        </div >
    }

}

export default Users; 