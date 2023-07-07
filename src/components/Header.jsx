/*Header:

Description: Renders the header/navigation component.
Functionality: Displays the navigation menu with links to different sections of the app. */


import React from 'react';
import { Link } from 'react-router-dom';
import './Headerstyle.css'

const Header = () => {
  return (
    <header>
      <nav className='head'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
