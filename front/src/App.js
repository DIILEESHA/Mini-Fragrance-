import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Spinner from "./component/spinner/Spinner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cookie from "./component/cookie/Cookie";
import "./fonts/fonts.css";
import Shop from "./pages/shop/Shop";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Nav = lazy(() => import("./component/nav/Nav"));
const Footer = lazy(() => import("./component/footer/Footer"));
const Lgnav = lazy(() => import("./component/nav/Lgnav"));
const System = lazy(() => import("./pages/system/System"));
const Newsletter = lazy(() => import("./component/newsletter/Newsletter"));
const Singleproduct = lazy(() => import("./pages/single/Singleproduct"));

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
          {/* {showPopup && <Newsletter closePopup={closePopup} />} */}
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
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </Suspense>
          {/* <Footer /> */}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
