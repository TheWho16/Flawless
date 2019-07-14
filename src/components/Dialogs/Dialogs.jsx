import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={classes.items + '' + classes.active}>
        <NavLink to={path}  activeClassName={classes.active}> {props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name='Dima' id='1'/>
                <DialogsItem name='Andrey' id='2'/>
                <DialogsItem name='Pasha' id='3'/>
                <DialogsItem name='Sveta' id='4'/>
                <DialogsItem name='Kostya' id='5'/>
                <DialogsItem name='Masha' id='6'/>
            </div>

            <div className={classes.messages}>
                <Message message='hi'/>
                <Message message='What'/>
                <Message message='Noy,man'/>
                <Message message='Damm'/>
                <Message message='Margin'/>
            </div>
        </div>
    )
}

export default Dialogs;