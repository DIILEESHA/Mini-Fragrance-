// import { useEffect } from "react";
import "./spinner.css";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import gif from "../../asset/preloader.gif";
// import ParticleComponent from "../particle/ParticleComponent";

const Spinner = () => {
  // const count = useMotionValue(0);
  // const rounded = useTransform(count, Math.round);

  // useEffect(() => {
  //   const animation = animate(count, 100, { duration: 12 });

  //   return animation.stop;
  // }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
      }}
    >
      <img src={gif} alt="" />
    </div>
    // <div className="ss">
    //   <motion.h1>{rounded}</motion.h1>
    // </div>
  );
};

export default Spinner;
