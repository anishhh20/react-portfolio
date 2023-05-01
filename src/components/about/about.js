import React from 'react'
import './about.css'
import AboutImg from "../../assests/transfer.gif"
import Resume from "../../assests/resume.pdf"
import Info from "./info"


import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    
    <section className="about section" id="about">

        <h2 className="section__title text-center" data-aos="fade-up">About Me</h2>

        <span className='section__subtitle text-center' data-aos="fade-up">My Introduction</span>

        <div className='about__container container grid'>

            <LazyLoadImage src={AboutImg} className='about__img'data-aos="zoom-in" alt='About_Image' />

            <div className='about__data'>

              <Info />

              <p className='about__description'>
                Fresher and Enthusiastic to learn new technologies and skills. I'm new to the IT 🖥 field. I've built some projects and have good programming knowledge. I need support to build a better version of myself with extra good programming knowledge. I've seen so many people's ideas floating around the Internet that I've decided to contribute my own. wants to be a part of the software development industry.
              </p>

              <a download="Resume" href={Resume} className='button button--flex'>Download CV{" "}<i class="uil uil-file-alt button__icon"></i></a>

            </div>

        </div>
    </section>

  )
}

export default About