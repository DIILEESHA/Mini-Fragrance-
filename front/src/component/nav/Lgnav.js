import React from "react";
import "./nav.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { MdScreenSearchDesktop } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";

import { Link, NavLink, useLocation } from "react-router-dom";

const Lgnav = ({ isScrolled }) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isSystem = location.pathname === "/system";

  return (
    <div
      className={`lg_nav ${isScrolled ? "scrolled" : ""} ${
        isAboutPage ? "pink" : ""
      }  ${isSystem ? "pink" : ""}`}
    >
      <ul className="lgnav_ul">
        <li className="nav_lg_li">
          <NavLink className="linka" to="/about">
            about
          </NavLink>
        </li>
        <li className="nav_lg_li">
          <NavLink className="linka" to="/system">
            system
          </NavLink>
        </li>
        <li className="nav_lg_li">
          <PiShoppingCartSimpleBold className="ico"/>
        </li>
      </ul>
      <ul className="lgnav_ul">
        <li className="nav_lg_li">
          <div className="casper">
            <Link className="linka" to="/">
              <h4 className="duta">formex</h4>
              <h5 className="meeba">functional fragrances</h5>
            </Link>
          </div>
        </li>
      </ul>
      <ul className="lgnav_ul">
        <li className="nav_lg_li">shop</li>
        <li className="nav_lg_li">
          <BsSearchHeart className="ico"/>
        </li>

        <li className="nav_lg_li">EN | SIN</li>
      </ul>
    </div>
  );
};

export default Lgnav;
