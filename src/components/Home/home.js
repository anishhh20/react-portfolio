import React, {useEffect} from 'react'
import Social from './social'
import Data from './data'
import ScrollDown from './scrollDown'
import Particles from '.././particles/particless';
import './home.css'

function Home() {
  return (

    <>

      <section id="top"></section>

      <section className="home section" id="Home - Section">

        <div className="home__container container grid">

            <Particles />

            <div className="home__content ">

              <Social />

              <div className='home__img' alt="Home_Image"></div>

              <Data />

            </div>

            <ScrollDown />

        </div>

      </section>

    </>
  )
}

export default Home