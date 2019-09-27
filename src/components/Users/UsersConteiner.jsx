import React from 'react';
import Users from './Users';

import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setcurrentPage, getUserThunk } from '../../redux/usersReducer';
import Preloder from '../childComponents/Preloader/Preloder';
import { usersAPI } from '../../redux/bll/userAction';

class UsersClass extends React.Component {

    componentDidMount() {

        this.props.getUserThunk(this.props.currentPage, this.props.pageNumber)
    }




    onPageChanged = (pageNumber) => {
        debugger
        this.props.setcurrentPage(pageNumber);

        usersAPI.getUserInfo(pageNumber)
            .then(data => {
                this.props.setUsers(data.items);


            });
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloder /> : null}
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






export default connect(mapStateToProps, { follow, unfollow, setUsers, setcurrentPage, getUserThunk })(UsersClass);
