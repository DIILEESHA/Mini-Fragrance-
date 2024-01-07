import React, { useState } from "react";
import "./nav.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import AddToCart from "../cart/AddToCart";

const Lgnav = ({ isScrolled }) => {
  const location = useLocation();
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const { index } = useParams();

  const isAboutPage = location.pathname === "/about";
  const isSystem = location.pathname === "/system";
  const isSingle = location.pathname.includes("/product/");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <div
      className={`lg_nav ${isScrolled ? "scrolled" : ""} ${
        isAboutPage ? "pink" : ""
      }  ${isSystem ? "pink" : ""} ${isSingle ? "pink" : ""}`}
    >
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="left">
        <ul className="lgnav_ul">
          <li className="nav_lg_li bk">
            <NavLink className="linka" to="/about">
              about
            </NavLink>
          </li>
          <li className="nav_lg_li bk">
            <NavLink className="linka" to="/system">
              system
            </NavLink>
          </li>
          <li className="nav_lg_li">
            <PiShoppingCartSimpleBold
              onClick={handleOpenCartModal}
              className="ico"
            />
          </li>
        </ul>
      </div>
      <div className="middle">
        <ul className="lgnav_ul">
          <li className="nav_lg_li">
            <div className="casper">
              <Link className="linka" to="/">
                <h4 className="duta">nullpunkt</h4>
                <h5 className="meeba">functional fragrances</h5>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {isCartModalOpen && <AddToCart onClose={handleCloseCartModal} />}
      <div className="right">
        <ul className="lgnav_ul">
          <li className="nav_lg_li bk">shop</li>
          <li className="nav_lg_li">
            <BsSearchHeart className="ico" />
          </li>

          <li className="nav_lg_li">EN | SIN</li>
        </ul>
      </div>
    </div>
  );
};

export default Lgnav;
