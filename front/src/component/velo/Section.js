// ParallaxSection.js

import React from "react";
import Velo from "./Velo";

function ParallaxSection() {
  return (
    <section>
      <Velo style={{ fontSize: "50px" }} baseVelocity={1}>
      formex functional✨shop now
      </Velo>
      {/* <Velo style={{ fontSize: "50px" }} baseVelocity={2}>
      shop now
      </Velo> */}
    </section>
  );
}

export default ParallaxSection;
