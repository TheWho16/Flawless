import React from 'react';
import Back from './foto/Back.jpg';
import './css/Profile.css'

const Profile = () => {
  return <div className="content">
    <div><img src={Back} />

</div>
    <div>ava+description</div>
    <div>
      <div>My post</div>
      <div>New post</div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  </div>
}

export default Profile; 