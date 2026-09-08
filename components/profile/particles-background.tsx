"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import type { Engine, ISourceOptions } from "@tsparticles/engine";

// Must be a stable reference — ParticlesProvider throws if the init callback
// identity changes while the engine is still loading.
const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

/** Ambient network-of-nodes background, evoking a graph / neural net. */
export function ParticlesBackground() {
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

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="hero-particles"
        options={options}
        className="absolute inset-0 h-full w-full"
      />
    </ParticlesProvider>
  );
}
