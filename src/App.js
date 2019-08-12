import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route } from "react-router-dom";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import UsersConteiner from './components/Users/UsersConteiner';


const App = (props) => {
    return (


        <div className="app-wrapper">
            <Header />
            <NavbarConteiner  />
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <DialogsConteiner/>} />
                <Route path='/profile' render={() => <Profile/>} />
                <Route path='/users' render={() => <UsersConteiner/>} />
            </div>

        </div>

    );
}



export default App;
