import React from "react";
import "./home.css";
import Header from "../../component/header/Header";
import WeAre from "../../component/who/WeAre";
import Word from "../../component/word/Word";
import Headershop from "../../component/headershop/Headershop";
import Section from "../../component/velo/Section";
import Mini from "../../component/velo/Mini";
import Parallaxd from "../../component/paralax/Parallaxd";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      {/* <Header />
      <Word />
      <WeAre />
      <Parallaxd />
      <Headershop />
      <Footer /> */}
      <Header />
      <Word />
      <WeAre />
      <Parallaxd />
      <Headershop />
    </div>
  );
};

export default Home;
