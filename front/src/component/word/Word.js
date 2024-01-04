import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./word.css";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  useEffect(() => {
    // Define the timeline for the infinite horizontal scroll
    let tl2 = gsap.timeline();
    tl2.to("#scrollingText", {
      x: 0,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    // Define the timeline for the horizontal scroll triggered by the scroll position
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scrollingText",
        scrub: 1,
      },
    });
    tl.to("#scrollingText", {
      xPercent: 10,
    });
  }, []);

  return (
    <div className="word">
      <div id="scrollingText" className="animated-text-container">
        <h1>
          formex functional fragrance shop now ♥ formex functional fragrance
          shop now ♥ formex functional fragrance shop now ♥{" "}
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
