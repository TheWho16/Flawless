


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";

let initialState = {
    users: [
        /*  {
             id: 1, photos: 'https://memepedia.ru/wp-content/uploads/2018/01/94e-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg',
             followed: true, name: 'Dmitry L.', status: 'Je suis Fransua', location: { city: 'Paris', country: 'France' }
         },
         {
             id: 2, photos: 'https://yt3.ggpht.com/a-/AAuE7mAu06rMY8nOQCJyXML5jpTdWDIegFxld3AeCA=s900-mo-c-c0xffffffff-rj-k-no',
             followed: false, name: 'Kostya G.', status: 'Im a VEGAN', location: { city: 'Vorkyta', country: 'Russia' }
         },
         {
             id: 3, photos: 'https://i.work.ua/sent_photo/d/a/d/dadd0a01c4e86f3f9dacf7c055e50639.jpg',
             followed: false, name: 'Lera K.', status: 'Why you dont phone me?', location: { city: 'PussyCity', country: 'Vaflyandia' }
         },
         {
             id: 4, photos: 'https://i.ytimg.com/vi/zPW8xUR1BgQ/maxresdefault.jpg',
             followed: true, name: 'Arsen K.', status: 'VapeNAtion', location: { city: 'Kiev', country: 'Ukraine' }
         },
         {
             id: 5, photos: 'http://pics.wikireality.ru/upload/thumb/f/f4/82f2426f2971.jpg/300px-82f2426f2971.jpg',
             followed: false, name: 'Artur K.', status: 'BossNIGER', location: { city: 'Kiev', country: 'Ukraine' }
         } */
    ],
    pageSize: 5,
    totalUsersCount: 54,
    currentPage: 0,
    isFetching: false
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setcurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const togleIsFetchingAC = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching: isFetching })

export default usersReducer;