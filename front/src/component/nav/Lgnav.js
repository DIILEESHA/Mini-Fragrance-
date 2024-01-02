import React from "react";
import "./nav.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

const Lgnav = ({ isScrolled }) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  return (
    <div
      className={`lg_nav ${isScrolled ? "scrolled" : ""} ${
        isAboutPage ? "pink" : ""
      }`}
    >
      <ul className="lgnav_ul">
        <li className="nav_lg_li">
          <NavLink className="linka" to="/about" activeClassName="active-link">
            about
          </NavLink>
        </li>
        <li className="nav_lg_li">system</li>
        <li className="nav_lg_li">journal</li>
      </ul>
      <ul className="lgnav_ul">
        <li className="nav_lg_li">
          <div className="casper">
            <h4 className="duta">formex</h4>
            <h5 className="meeba">functional fragrances</h5>
          </div>
        </li>
      </ul>
      <ul className="lgnav_ul">
        <li className="nav_lg_li">shop</li>
        <li className="nav_lg_li">
          <PiShoppingCartSimpleBold />
        </li>
        <li className="nav_lg_li">
          <MdScreenSearchDesktop />
        </li>
        <li className="nav_lg_li">EN | SIN</li>
      </ul>
    </div>
  );
};

export default Lgnav;
