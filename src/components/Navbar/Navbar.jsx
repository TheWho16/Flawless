import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./FrendsList/FriendsList";

const Navbar = (props) => {
    let state = props.friendsList;
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/setings' activeClassName={classes.active}>Setings</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
        </div>
       
        <FriendsList state={state}/>
    </nav>

}

export default Navbar; 