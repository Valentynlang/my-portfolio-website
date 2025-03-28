import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';

const ParticlesContainer: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
  }, []);
  return (
    <Particles
      className='w-full h-full absolute translate-z-0' 
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#00B9E8',
          },
          links: {
            color: '#6CB4EE',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: {min: 0.5, max: 4},
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer; 