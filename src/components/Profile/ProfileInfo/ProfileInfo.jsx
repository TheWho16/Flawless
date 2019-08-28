import React from 'react';
import Back from '/FrontEnd/React/Flawless/Flawless/src/components/foto/Back.jpg';
import classes from './ProfileInfo.module.css'
import Preloder from '../../childComponents/Preloader/Preloder';
import HomePageAnim from '../../childComponents/HomePageAnimatoin/HomePageAnim';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloder />
    } else {

        return (
            <div>
                <div className={classes.style}>
                    <HomePageAnim/>
                </div>
                <div className={classes.descriptionBlock}>
                    <div className={classes.ava} >
                        <img src={props.profile.photos.large} alt="profilePhoto" />
                    </div>
                    <div className={classes.profileInfo}>
                            <p>Name: {props.profile.fullName} </p>
                            <p>Status: {props.profile.aboutMe} </p>
                            <p>Contacts:</p>
                            <p><a href={props.profile.contacts.facebook}>Facebook</a></p>
                            <p><a href={props.profile.contacts.twitter}>Twitter</a></p>
                            <p><a href={props.profile.contacts.github}>Github</a></p>
                            <p><a href={props.profile.contacts.instagram}>Instagram</a></p>
                        


                    </div>


                </div>

            </div>
        )
    }
}

export default ProfileInfo; 