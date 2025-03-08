import React from "react";
import "./para.css";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Parallaxd = () => {
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Parallax
        strength={270}
        className="bgClassName"
        bgImage={
          "https://cdn.sanity.io/images/0q5cvqe1/production/862ddc53f262052118d15a3308b38df8c9e4c456-1500x2000.webp"
        }
      >
        <div className="content">
          <div className="sub_content">
            <h5>NEW COLLECTION✨</h5>
            <h1>Be different in your own way!</h1>
            <h2>Find your unique Fragrance.</h2>

            <Link className="linka" to="/shop">
              <button onClick={handleClicks}>shop collection🍜</button>
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallaxd;
