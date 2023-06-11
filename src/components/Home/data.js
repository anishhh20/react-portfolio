import React from 'react'
import Typewriter from "typewriter-effect";

const Data = () => {
  return (
    
    <div className="home__data">

        <div className="inline">

          <div className="home__title pb-0 text-left">

            <span className="text-animate-hover">H</span>
            <span className="text-animate-hover">i</span>
            <span className="wave-icon text-animate-hover">🤚</span>
            <span className="text-animate-hover">,</span>
          
          </div>

          <div className="home__title pt-0 text-left">

            <span className="text-animate-hover">I</span>
            <span className="text-animate-hover">'</span>
            <span className="text-animate-hover">m</span>
            {"  "}
            <span className="text-animate-hover pl-2">A</span>
            <span className="text-animate-hover">n</span>
            <span className="text-animate-hover">i</span>
            <span className="text-animate-hover">s</span>
            <span className="text-animate-hover">h</span> 

          </div>
        </div>


        <h3 className="home__subtitle">

          {/* typewrite to auto type some text */}
          <Typewriter
            options={{
              strings: [
                "Web Developer ",
                "Student ",
                "Photographer ",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 70,
              typeSpeed: 10,
            }}
          />
        </h3>

        <p className='home__description'>I’m a creative designer, and I’m very passionate and dedicated to my work.</p>

        <a class="fancy" href="#Contact - Section">
          <span class="top-key"></span>
          <span class="text">Say Hello <i className='bx bx-send button__icon' ></i></span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>

    </div>

  )
}

export default Data