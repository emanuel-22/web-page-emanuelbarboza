"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import type { ISourceOptions } from "@tsparticles/engine";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
            width: 1440,
            height: 900,
          },
        },

        color: {
          value: "#9a9a9a",
        },

        opacity: {
          value: 0.5,
        },

        size: {
          value: {
            min: 1,
            max: 2.5,
          },
        },

        links: {
          enable: true,
          distance: 140,
          color: "#8a8a8a",
          opacity: 0.25,
          width: 1,
        },

        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          outModes: {
            default: "out",
          },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },

        modes: {
          grab: {
            distance: 160,
            links: {
              opacity: 0.5,
            },
          },
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="h-full w-full"
    />
  );
}