import React from 'react'
import './about.css'
import AboutImg from "../../assests/transfer.gif"
import Resume from "../../assests/resume.pdf"
import Info from "./info"


import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    
    <section className="about section" id="About - Section">

        <h2 className="section__title text-center" data-aos="fade-up">About Me</h2>

        <span className='section__subtitle text-center' data-aos="fade-up">My Introduction</span>

        <div className='about__container container grid'>

            <div className='about__img-div'>
            <LazyLoadImage src={AboutImg} loading="lazy" effect="blur" className='about__img' data-aos="zoom-in" alt='About_Image' />

            </div>


            <div className='about__data'>

              <Info />

              <p className='about__description'>
                Strong passion for staying up-to-date with the latest trends and technologies in my field. I've developed expertise in web development and gained valuable experience as a Web Developer. I acknowledge that there is still much more for me to learn and grow in my profession.
              </p>
              <p className='about__description'>
                I'm a fresher with a strong enthusiasm for learning new technologies and skills. Although I'm new to the IT field, I have already built some projects and possess good programming knowledge. I'm eager to enhance my programming skills. I've come across numerous innovative ideas online, and now I'm inspired to contribute.
              </p>

              <a class="fancy" download="Resume" href={Resume} >
                <span class="top-key"></span>
                <span class="text">Download CV <i class="uil uil-file-alt button__icon"></i></span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>

            </div>

        </div>
    </section>

  )
}

export default About