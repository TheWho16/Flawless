import React from 'react';
import './Profile.css'
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUsersProfile } from '../../redux/profileReducer'



class ProfileConteiner extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data);

            });
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }

}

let WithURLConteinerComponent = withRouter(ProfileConteiner);

export default connect(mapStateToProps, { setUsersProfile })(WithURLConteinerComponent); 