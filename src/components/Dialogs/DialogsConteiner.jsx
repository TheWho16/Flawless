
import Dialogs from './Dialogs'

import { updateNewMessageActionCreator, sendMessageActionCreator } from "../../redux/dialogReducer";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageActionCreator(body));
           
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsConteiner;
