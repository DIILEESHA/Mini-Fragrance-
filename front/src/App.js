import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Spinner from "./component/spinner/Spinner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cookie from "./component/cookie/Cookie";
import "./fonts/fonts.css";
import { AnimatePresence } from "framer-motion";
import AddToCart from "./component/cart/AddToCart";
const Home = lazy(() => import("./component/home/Home"));
const About = lazy(() => import("./component/about/About"));
const Nav = lazy(() => import("./component/nav/Nav"));
const Footer = lazy(() => import("./component/footer/Footer"));
const Lgnav = lazy(() => import("./component/nav/Lgnav"));
const System = lazy(() => import("./component/system/System"));
const Newsletter = lazy(() => import("./component/newsletter/Newsletter"));
const Singleproduct = lazy(() => import("./component/single/Singleproduct"));

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      },100);
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
    setShowPopup(window.location.pathname === "/");
  }, [window.location.pathname]);

  const closePopup = () => {
    setShowPopup(!true);
  };

  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <Cookie />
          {showPopup && <Newsletter closePopup={closePopup} />}
          <Suspense>
            <Nav />
            <Lgnav isScrolled={scrolling} isHomepage={isHomepage} />
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
              <Route path="/product/:slug" element={<Singleproduct />} />
            </Routes>
          </Suspense>
          {/* <AddToCart /> */}
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
