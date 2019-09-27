import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
const Dialogs = (props) => {
    let state = props.dialogPage;
     

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />);
     


    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
         
        props.sendMessage();

    }
    let onNewMessageChange = (e) => {
         
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={classes.messages}>
                {messagesElement}
            </div>
            <div className={classes.messagesbox}>
                <div>
                    <textarea
                        placeholder="Enter your message"
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
