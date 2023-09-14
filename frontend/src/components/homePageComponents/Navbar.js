/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/Logo.png";



const Navbar = () => {

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="\subject">Subjects</a>
        <a href="#contactUs">Contact Us</a>

        <button className="primary-button" onClick={window.location.href = '/login'}>Login</button>
      </div>


    </nav>
  );
};

export default Navbar;
