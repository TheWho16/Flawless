import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    navBarPage: navBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;