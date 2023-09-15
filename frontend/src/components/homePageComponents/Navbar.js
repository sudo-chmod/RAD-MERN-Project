/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate()

  function handle() {
    navigate("/login")
  }


  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="/subject">Subjects</a>
        <a href="#contactUs">Contact Us</a>

        <button className="primary-button" onClick={handle}>Login</button>
      </div>


    </nav>
  );
};

export default Navbar;
