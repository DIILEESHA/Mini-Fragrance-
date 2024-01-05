import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Spinner from "./component/spinner/Spinner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cookie from "./component/cookie/Cookie";
import "./fonts/fonts.css";
import { AnimatePresence } from "framer-motion";
// Dynamically import components using React.lazy for increase the web performance & better user experience
const Home = lazy(() => import("./component/home/Home"));
const About = lazy(() => import("./component/about/About"));
const Nav = lazy(() => import("./component/nav/Nav"));
const Footer = lazy(() => import("./component/footer/Footer"));
const Lgnav = lazy(() => import("./component/nav/Lgnav"));
const System = lazy(() => import("./component/system/System"));
const Newsletter = lazy(() => import("./component/newsletter/Newsletter"));

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 0);
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

  useEffect(() => {
    // Show the popup only on the home page
    setShowPopup(window.location.pathname === "/");
  }, [window.location.pathname]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <AnimatePresence mode="wait">
          <BrowserRouter>
            <Cookie />
            {showPopup && <Newsletter closePopup={closePopup} />}
            {/* Wrap your lazy-loaded components with Suspense */}
            <Suspense fallback={<Spinner />}>
              <Nav />
              <Lgnav isScrolled={scrolling} isHomepage={isHomepage} />
              {/* <Newsletter /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/about"
                  element={<About />}
                  isScrolled={!scrolling}
                  isHomepage={!isHomepage}
                />
                <Route
                  path="/system"
                  element={<System />}
                  isScrolled={!scrolling}
                  isHomepage={!isHomepage}
                />
              </Routes>
              <Footer />
            </Suspense>
          </BrowserRouter>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
