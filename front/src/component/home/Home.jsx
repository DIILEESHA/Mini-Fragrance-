import React from "react";
import "./home.css";
import Header from "../header/Header";
import WeAre from "../who/WeAre";
import Word from "../word/Word";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Word />
      <WeAre />
      <Word />

    </div>
  );
};

export default Home;
