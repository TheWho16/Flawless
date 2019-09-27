import React from 'react';
import styled from './Header.module.css'
import Logo from './Logo.PNG';
import { NavLink } from "react-router-dom";
const Header = (props) => {
    return <header className={styled.header}>

        <NavLink to='/' ><img src={Logo} alt="logo" /></NavLink>
        <div className={styled.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink>}
{/*             {props.isAuth ? "True" : "False"}
 */}        </div>
    </header>

        }
        
export default Header; 