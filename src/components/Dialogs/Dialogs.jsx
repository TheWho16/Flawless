import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageActionCreator, sendMessageActionCreator } from "../../redux/dialogReducer";
const Dialogs = (props) => {
    debugger;


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.state.messages.map(m => <Message message={m.message} />);
    debugger;


    let newMessageBody = React.createRef();
    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = () => {

        let body = newMessageBody.current.value;
        props.dispatch(updateNewMessageActionCreator(body));
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
                        value={props.state.newMessageBody}
                        onChange={onNewMessageChange}
                        ref={newMessageBody}
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
