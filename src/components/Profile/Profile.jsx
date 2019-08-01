import React from 'react';
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <div>
        <ProfileInfo/>

        <MyPosts state={props.state} 
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile; 