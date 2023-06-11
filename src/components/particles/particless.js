import React, {useEffect} from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particless = () => {

  const particlesInit = async (main) => {

    await loadFull(main);

  };

  return (

    <Particles
    
      id="tsparticles"
      init={particlesInit}

        options={{

            fullScreen: {
                enable: false
            },

            //defines background color to #fff
            background: {
                color: {
                    value: "var(--xx)",
                },
            },

            //fps limit 
            fpsLimit: 300,

            //how particles should interact
            interactivity: {
                events: {

                    //onClick event
                    onClick: {
                        enable: true,
                        mode: "push",
                    },

                    //OnHover Event
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },

                //after the onClick / onHover event this push & repulse mode will called
                modes: {
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.7,
                    },
                },
            },

            //particles CSS
            particles: {
                color: {
                    value: "#000",
                },
                links: {
                    color: "#000",
                    distance: 100,
                    enable: true,
                    opacity: 0.3,
                    width: .5,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        }}
    />
  )
}

export default Particless