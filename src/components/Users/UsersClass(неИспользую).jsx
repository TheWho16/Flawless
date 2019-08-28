import React from 'react';
import * as axios from 'axios'
import Users from './Users';



class UsersClass extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=5`)
            .then(response => {
                debugger;

                this.props.setUsers(response.data.items);
            });
    }




    onPageChanged = (pageNumber) => {
        this.props.setcurrentPage(pageNumber);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`)
            .then(response => {
                debugger;

                this.props.setUsers(response.data.items);
            });
    }


    render() {

        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged} />

    }
}
export default UsersClass; 