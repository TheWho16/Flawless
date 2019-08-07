import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navBarReducer from "./navBarReducer";



let store = {

    _state: {
        profilePage: {
            post: [
                { id: 1, message: 'hi', likesCount: 12 },
                { id: 2, message: 'what', likesCount: 5 },
                { id: 3, message: 'stop', likesCount: 552 },
                { id: 4, message: 'dont ask me, about it', likesCount: 132 }
            ],
            newPostText: [
                'OY, hi mark'
            ]
        },

        dialogsPage: {

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
            newMessageBody:[ ''
        ]            
        },
        navbarPage: {

            friendsList: [
                { id: 1, name: 'Dima Lych' },
                { id: 2, name: 'Andrey Lox' },
                { id: 3, name: 'Pasha Kes' },
                { id: 4, name: 'Sveta Lol' },
                { id: 5, name: 'Kostya G' },
                { id: 6, name: 'Masha Bibyrisvilly' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

      

    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.navbarPage = navBarReducer(this._state.navbarPage, action);
        this._callSubscriber(this._state);
    }


}


export default store;
window.store = store;