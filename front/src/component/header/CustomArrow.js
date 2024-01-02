import React from "react";
import "./header.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Arrow = ({ direction, onClick }) => {
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
    // Arrow color
  };

  return (
    <div style={{ ...arrowStyles, [direction]: 0 }} onClick={onClick}>
      {direction === "left" ? (
        <IoIosArrowRoundBack className="for" />
      ) : (
        <IoIosArrowRoundForward className="for" />
      )}
    </div>
  );
};

const PrevArrow = ({ onClick }) => <Arrow direction="left" onClick={onClick} />;
const NextArrow = ({ onClick }) => (
  <Arrow direction="right" onClick={onClick} />
);

export { PrevArrow, NextArrow };
