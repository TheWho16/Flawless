
import { connect } from 'react-redux';
import UsersClass from './UsersClass';
import { followAC, unfollowAC, setUsersAC, setcurrentPageAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);