import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HomePage from '../Pages/HomePage.js';
import About from '../Pages/About.js';
import './Header.css';
//import {ReactComponent as Logo} from '..assets/logo.svg';
//import {ReactComponent as Homen} from '..assets/hove.svg';
//import Button from '@restart/ui/esm/Button';


function Header (){
    return(
        <nav>
            <div>
                Logo
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <NavLink to='/'><HomePage/></NavLink>
                <NavLink to='/about'><About/></NavLink>
            </div>

        </nav>
    )
}

export default Header