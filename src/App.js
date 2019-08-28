import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileConteiner from './components/Profile/ProfileConteiner';
import { Route } from "react-router-dom";
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import TEST from './components/Setings/TEST';


const App = (props) => {
    return (


        <div className="app-wrapper">
            <Header />
            <NavbarConteiner  />
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <DialogsConteiner/>} />
                <Route path='/profile/:userId?' render={() => <ProfileConteiner/>} />
                <Route path='/users' render={() => <UsersConteiner/>} />
                <Route path='/setings' render={() => <TEST/>} />
            </div>

        </div>

    );
}



export default App;
