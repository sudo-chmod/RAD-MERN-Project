import React from "react";
import Navbar from "./Navbar";
import HomeAuto from "./HomeAutoPlay";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <HomeAuto />
    </div>
  );
};

export default Home;
