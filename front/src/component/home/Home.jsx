import React from "react";
import "./home.css";
import Header from "../header/Header";
import WeAre from "../who/WeAre";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <WeAre />
    </div>
  );
};

export default Home;
