import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk  from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,
    dialogPage: dialogReducer,
    navBarPage: navBarReducer,
    usersPage: usersReducer,
   
});

let store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;