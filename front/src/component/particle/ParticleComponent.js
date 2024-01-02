import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      // Initialize particles engine when the component mounts
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
    }
  }, [isVisible]);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#c0c0c0",
        },
        links: {
          color: "#333",
          distance: 110,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 100000,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return isVisible ? (
    <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  ) : null;
};

export default ParticleComponent;
