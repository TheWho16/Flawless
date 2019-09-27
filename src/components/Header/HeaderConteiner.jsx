import React from 'react';
import * as axios from 'axios'
import { setAuthUserData, togleIsFetching, areYouAuth } from '../../redux/authReducer';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderConteiner extends React.Component {
    componentDidMount() {
        this.props.togleIsFetching(true);
        this.props.areYouAuth(false);

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    this.props.togleIsFetching(false);
                    this.props.areYouAuth(true);

                }
            });
    }


    render() {

        return <>
            <Header {...this.props} />
        </>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    login: state.auth.login

});


export default connect(mapStateToProps, { setAuthUserData, togleIsFetching, areYouAuth })(HeaderConteiner);