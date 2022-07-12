import React from "react";
import { Link } from 'react-scroll';
import "./Navbars.css";

const Navbar = () => {

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'aboutUS'
    },
    {
      id: 3,
      link: 'whatWeDo'
    },
    {
      id: 4,
      link: 'contactUS'
    },
  ]

  return (
    <nav className="header stroke">
      <h3 className="nav--logo_text fontColorMain fontMain">
        CAREERSHIFTERS.DEV
      </h3>
      <ul className="nav--title cursor-pointer">
        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link></li>
        <li><Link to="aboutUs" spy={true} smooth={true} offset={-100} duration={500}>ABOUT US</Link></li>
        <li><Link to="team" spy={true} smooth={true} offset={-100} duration={500}>TEAM</Link></li>
        <li><Link to="whatWeDo" spy={true} smooth={true} offset={-100} duration={500}>WHAT WE DO</Link></li>
        <li><Link to="contactUs" spy={true} smooth={true} offset={-100} duration={500}>CONTACT US</Link></li>
      </ul>
    </nav >
  );
};

export default Navbar;
