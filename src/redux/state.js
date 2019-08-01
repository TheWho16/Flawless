import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        post: [
            { id: 1, message: 'hi', likesCount: 12 },
            { id: 2, message: 'what', likesCount: 5 },
            { id: 3, message: 'stop', likesCount: 552 },
            { id: 4, message: 'dont ask me, about it', likesCount: 132 }
        ],
        newPostText: [
            'ae boy!!'
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
            { id: 1, text: 'hi' },
            { id: 2, text: 'man' },
            { id: 3, text: 'i really whant to say' },
            { id: 4, text: 'she wants to do it' },
            { id: 5, text: 'No? Why?' },
            { id: 6, text: 'Honey. Wheres  my supper suit?' }
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
}


export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.newPostText = '';
    state.profilePage.post.push(newPost);
    rerenderEntireTree(state);
}


export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;