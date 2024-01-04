import React from "react";
import "./home.css";
import Header from "../header/Header";
import WeAre from "../who/WeAre";
import Word from "../word/Word";
import Headershop from "../headershop/Headershop";
import Section from "../velo/Section";
import Mini from "../velo/Mini";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Word />
      <WeAre />
      <Section />
      <Headershop />
      {/* <Word /> */}
    </div>
  );
};

export default Home;
