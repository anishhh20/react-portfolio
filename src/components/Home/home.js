import React, {useEffect} from 'react'
import Social from './social'
import Data from './data'
import ScrollDown from './scrollDown'
import Particles from '.././particles/particless';
import './home.css'
import Tilt from 'react-parallax-tilt';

function Home() {
  return (

    <>

      <section id="top"></section>

      <section className="home section" id="Home - Section">

        <div className="home__container container grid">

            <Particles />

            <div className="home__content ">

              <Social />

              <Tilt perspective={5000} scale={1} gyroscope={true} transitionSpeed={5000}>
                <div className='home__img' alt="Home_Image"></div>
              </Tilt>


              <Data />

            </div>

            <ScrollDown />

        </div>

      </section>

    </>
  )
}

export default Home