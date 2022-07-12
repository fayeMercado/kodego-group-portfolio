import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbars from './Navbars.css';

const Navbar = () => {
    return (
        <nav className='header' >
            <h3 className="nav--logo_text fontColorMain fontMain">CAREERSHIFTERS.DEV</h3>
            <ul class="nav--title">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>WHAT WE DO</li>
                <li>CONTACT US</li>
            </ul >
        </nav >
    )
};

export default Navbar