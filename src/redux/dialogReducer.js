const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Pasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Kostya' },
        { id: 6, name: 'Masha' }
    ],

    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'man' },
        { id: 3, message: 'i really whant to say' },
        { id: 4, message: 'she wants to do it' },
        { id: 5, message: 'No? Why?' },
        { id: 6, message: 'Honey. Wheres  my supper suit?' }
    ],
    newMessageBody: [''
    ]
}

const dialogReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageBody = action.body;

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.messages.push({ id: 6, message: body });
        state.newMessageBody = '';

    }
    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageActionCreator = (body) => ({ type: UPDATE_NEW_MESSAGE, body: body })


export default dialogReducer;