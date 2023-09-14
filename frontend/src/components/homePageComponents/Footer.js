import React from "react";
import Logo from "../../assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="footer-wrapper" >
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons" >
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="#home">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="/subject">Subject</a>
          <a href="#contactUs">Contact Us</a>


        </div>
        <div className="footer-section-columns">
          <span><Icon.GeoAlt /> No.2, RAD Building Complex, Colombo7</span>
          <span><Icon.TelephoneFill /> +94-11-123-1234</span>
          <span><Icon.EnvelopeFill /> radinstitute@gmmail.com</span>

        </div>
      </div>
    </div>
  );
};

export default Footer;
