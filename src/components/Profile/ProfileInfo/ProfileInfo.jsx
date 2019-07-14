import React from 'react';
import Back from '/FrontEnd/React/Flawless/Flawless/src/components/foto/Back.jpg';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return( 
    <div>
        <div>
            <img src={Back}/>
        </div>
        <div className={classes.descriptionBlock}>ava+description</div>

    </div>
    )
}

export default ProfileInfo; 