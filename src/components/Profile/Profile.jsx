import React from 'react';
import Back from '../foto/Back.jpg';
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div >
        <div><img src={Back}/>

        </div>
        <div>ava+description</div>

        <MyPosts/>
    </div>
}

export default Profile; 