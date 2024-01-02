import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import FetchData from "./component/header/Header";
import TextComponent from "./component/header/TextComponent";
import Home from "./component/home/Home";
import Spinner from "./component/spinner/Spinner";
import { Routes, Route, BrowserRouter,useLocation } from "react-router-dom";
import About from "./component/about/About";
import Nav from "./component/nav/Nav";
import Lgnav from "./component/nav/Lgnav";

function App() {
  const [loading, setLoading] = useState(true);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 10);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomepage = window.location.pathname === "/";
  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <Nav />
          <Lgnav isScrolled={scrolling} isHomepage={isHomepage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}

      {/* <Header/> */}
    </div>
  );
}

export default App;
