import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/csslogo4.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="csd__navbar">
      <div className="csd__navbar-links">
        <div className="csd__navbar-links_logo">
          <a href="/">
          <img src={logo} alt="img"/>
          </a>
        </div>
        <div className="csd__navbar-links_container">
          <p className="csd__navbar-links_size"><a href="/">HOME</a></p>
          <p className="csd__navbar-links_size"><a href="/achievements">ACHIEVEMENTS</a></p>
          <p className="csd__navbar-links_size"><a href="/events">EVENTS</a></p>
          <p className="csd__navbar-links_size"><a href="/publications">PUBLICATIONS</a></p>
          <p className="csd__navbar-links_size"><a href="/team">TEAM</a></p>
        </div>
      </div>
      <div className="csd__navbar-sign">
        <a href="https://cssamu.pythonanywhere.com/admin/" target="_blank" rel="noreferrer">
        <button type="button">Admin Login</button>
        </a>
      </div>
      <div className="csd__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#151B54" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#151B54" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="csd__navbar-menu_container scale-up-center">
          <div className="csd__navbar-menu_container-links">
          <p><a href="/">HOME</a></p>
          <p><a href="/achievements">ACHIEVEMENTS</a></p>
          <p><a href="/events">EVENTS</a></p>
          <p><a href="/publications">PUBLICATIONS</a></p>
          <p><a href="/team">TEAM</a></p>
          </div>
          <div className="csd__navbar-menu_container-links-sign">
          <a href="https://cssamu.pythonanywhere.com/admin/" target="_blank" rel="noreferrer">
          <button type="button">Admin Login</button>
          </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;