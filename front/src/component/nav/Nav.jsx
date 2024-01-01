import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_sm_container">
        <h1 className="nav_sm_title">
          Subscribe to our newsletter and enjoy more information about our
          functional fragrances.
        </h1>
      </div>
      <div className="nav_lg_container">
        <div className="nav_lg_sub"></div>
        <ul className="nav_ul">
          <li className="nav_li">about</li>
          <li className="nav_li">system</li>
          <li className="nav_li">journal</li>
        </ul>
        <div className="nav_lg_sub"></div>
        <div className="nav_lg_sub">
          <ul className="nav_ul">
            <li className="nav_li">shop</li>
            <li className="nav_li"></li>
            <li className="nav_li"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
