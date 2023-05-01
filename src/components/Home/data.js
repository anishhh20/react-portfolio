import React from 'react'
import Typewriter from "typewriter-effect";

const Data = () => {
  return (
    
    <div className="home__data">

        <h1 className="home__title">Anish Teli <span className="wave-icon">🤚</span></h1>

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

        <a href='#contact' className='btn button'>Say Hello{" "}<i className='bx bx-send button__icon' ></i></a>

    </div>

  )
}

export default Data