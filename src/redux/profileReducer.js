const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    post: [
        { id: 1, message: 'hi', likesCount: 12 },
        { id: 2, message: 'what', likesCount: 5 },
        { id: 3, message: 'stop', likesCount: 552 },
        { id: 4, message: 'dont ask me, about it', likesCount: 132 }
    ],
    newPostText: [
        'OY, hi mark'
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ' '
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
         
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default: return state;

    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST, newText: text })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;