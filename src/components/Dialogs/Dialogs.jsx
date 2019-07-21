import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Kostya'},
        {id: 6, name: 'Masha'},
    ]


    let messages = [
        {id: 1, text: 'hi'},
        {id: 2, text: 'man'},
        {id: 3, text: 'i really whant to say'},
        {id: 4, text: 'she wants to do it'},
        {id: 5, text: 'No? Why?'},
        {id: 6, text: 'Honey. Wheres  my supper suit?'},
    ]

let dialogsElements = dialogs.map (d =>  <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = messages.map(m => <Message message={m.text}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;