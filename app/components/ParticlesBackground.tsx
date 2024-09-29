'use client';

import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Container, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

// This is the reusable component
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Load the particles engine on component mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load a lightweight version of the particles engine
    }).then(() => {
      setInit(true); // Mark engine as initialized
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container); // This will log the particles container to the console when it's loaded
  };

  // Particle configuration typed as ISourceOptions
  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: '#000000',
        },
        image: '',
        position: '',
        repeat: '',
        size: '',
        opacity: 1,
      },
      backgroundMask: {
        composite: 'destination-out',
        cover: {
          color: {
            value: '#fff',
          },
          opacity: 1,
        },
        enable: false,
      },
      clear: true,
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'grab',
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          push: {
            default: true,
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
          },
        },
      },
      particles: {
        color: {
          value: '#D3D3D3',
        },
        links: {
          color: '#ffffff',
          distance: 200,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          speed: 1,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 100,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 3,
            startValue: 'random',
          },
        },
        size: {
          value: {
            min: 1,
            max: 10,
          },
          animation: {
            enable: true,
            speed: 20,
            startValue: 'random',
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} // Options typed as ISourceOptions
        className=""
      />
    );
  }

  return null; // Return nothing while the engine is initializing
};

export default ParticlesBackground;
