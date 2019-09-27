const SET_USER_DATA = 'SET_USER_DATA';
const TOGLE_IS_FETCHING = "TOGLE_IS_FETCHING";
const ARE_YOU_AUTH ="ARE_YOU_AUTH"

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
            case TOGLE_IS_FETCHING: {
                return { ...state, isFetching: action.isFetching }
            }
            case ARE_YOU_AUTH: {
                return { ...state, isAuth: action.isAuth }
            }

        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching: isFetching })
export const areYouAuth = (isAuth) => ({ type: ARE_YOU_AUTH, isAuth: isAuth })

export default authReducer;