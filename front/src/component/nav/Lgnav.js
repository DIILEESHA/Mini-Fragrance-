import React, { useEffect, useState } from "react";
import "./nav.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import AddToCart from "../cart/AddToCart";
import { useCart } from "../../context/CartContext";
import { FaAlignRight } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const Lgnav = ({ isScrolled }) => {
  const [open, isOpen] = useState(false);
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const location = useLocation();
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const { cartState } = useCart();

  const { index } = useParams();

  const handleLinkHover = () => {
    // Play music when link is hovered
    const audio = new Audio(
      "https://drive.google.com/file/d/13cH8FLOnv9hZM8JDy3IgtrAgDdx_lRIv/view?usp=drive_link"
    );
    audio.play();
  };

  const isAboutPage = location.pathname === "/about";
  const isSystem = location.pathname === "/system";
  const isShop = location.pathname === "/shop";
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
  useEffect(() => {}, [cartState]);

  return (
    <div
      className={`lg_nav 
      ${isScrolled ? "scrolled" : ""} 
      ${isAboutPage ? "pink" : ""} 
      ${isSystem ? "pink" : ""} 
      ${isSingle ? "pink" : ""}
      ${isShop ? "pink" : ""}
      
      `}
    >
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="left">
        <ul className="lgnav_ul">
          <li className="nav_lg_li bk lk">
            <NavLink className="linka" onClick={handleClicks} to="/about">
              about
            </NavLink>
          </li>
          <li className="nav_lg_li bk lk">
            <NavLink className="linka" onClick={handleClicks} to="/system">
              system
            </NavLink>
          </li>
          <li className="nav_lg_li lk ">
            <div className="ime" onClick={handleOpenCartModal}>
              <PiShoppingCartSimpleBold className="ico" />

              <div className="cruse">
                {cartState.cartItems.length > 0 && (
                  <div className="cart-item-count">
                    {cartState.cartItems.length}
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>

        <ul className="mobile_ul" onClick={() => isOpen(!open)}>
          <li className="">
            {open ? (
              <IoCloseSharp className="nema" />
            ) : (
              <CiMenuBurger className="nema" />
              // <div >s</div>
            )}
          </li>
          <li className="nav_lg_li lk mk">
            <div className="ime" onClick={handleOpenCartModal}>
              <PiShoppingCartSimpleBold className="ico" />

              <div className="cruse">
                {cartState.cartItems.length > 0 && (
                  <div className="cart-item-count">
                    {cartState.cartItems.length}
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>

        <div
          className="mobile_ul_section"
          style={{ top: open ? "0px" : "-50000vh" }}
        >
          <div className="dim">
            <ul className="mobile_uls">
              <li>about</li>
              <li>system</li>
              <li>shop</li>
              <li>journey</li>
            </ul>
            <div className="susa">
              <h6
                style={{
                  fontSize: "15px",
                  fontSmooth: "small",
                  color: "#fff",
                  fontWeight: "500",
                  lineHeight: "1.6",
                }}
              >
                © 2024
                <del style={{ margin: "0px 5px" }}>
                  Made by Dileesha © 2024.
                </del>
                <br />
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <ul className="lgnav_ul">
          <li className="nav_lg_li">
            <div className="casper">
              <Link className="linka" onClick={handleClicks} to="/">
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
          <Link className="linka" onClick={handleClicks} to="/shop">
            <li className="nav_lg_li bk lk">shop</li>
          </Link>
          <li className="nav_lg_li">
            <BsSearchHeart className="ico" />
          </li>

          <li className="nav_lg_li">EN</li>
        </ul>
      </div>
    </div>
  );
};

export default Lgnav;
