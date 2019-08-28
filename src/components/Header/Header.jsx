import React from 'react';
import './Header.css'
import Logo from './Logo.PNG';
import {NavLink} from "react-router-dom";
const Header = () => {
    return <header className='header'>
       <NavLink to='/' ><img src={Logo} /></NavLink>  
      
    </header>

}

export default Header; 