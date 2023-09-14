import React from "react";


const About = () => {
  return (
    <div id="aboutus" className="about-section-container">

      <div className="about-section-image-container">
        <img src="https://www.stthomas.edu/_media-library/_images/home/stthomas-arial-view-of-campus.jpg" alt="" class="rounded-end-circle" style={{ height: "500px" }} />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">About Us</h1>
        <h1 className="primary-subheading">
          RAD is a Cetified Private Institute
        </h1>
        <p className="primary-text">
          We're a private institute focused on helping you excel through personalized learning.

        </p>
        <p className="primary-text">
          Our experienced teachers are here to support your educational journey and help you reach your goals.
        </p>

      </div>
    </div>
  );
};

export default About;
