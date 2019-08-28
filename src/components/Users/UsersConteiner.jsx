import React from 'react';
import Users from './Users';

import { connect } from 'react-redux';
import * as axios from 'axios'
import { followAC, unfollowAC, setUsersAC, setcurrentPageAC, togleIsFetchingAC } from '../../redux/usersReducer';
import Preloder from '../childComponents/Preloader/Preloder';

class UsersClass extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true);

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=5`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.togleIsFetching(false);

            });
    }




    onPageChanged = (pageNumber) => {
        this.props.setcurrentPage(pageNumber);
        this.props.togleIsFetching(true);

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=10`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.togleIsFetching(false);
                debugger;

            });
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloder/> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setcurrentPage: (pageNumber) => {
            dispatch(setcurrentPageAC(pageNumber))
        },
        togleIsFetching: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        },

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
